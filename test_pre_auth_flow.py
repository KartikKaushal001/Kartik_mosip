import requests
import json
import base64
import time
from urllib.parse import urlparse, parse_qs
from cryptography.hazmat.primitives.asymmetric import rsa
import jwt

# Base URLs
CERTIFY_URL = "http://localhost:8090/v1/certify"
NGINX_URL = "http://localhost:8091"

def int_to_b64url(val):
    length = (val.bit_length() + 7) // 8
    val_bytes = val.to_bytes(length, byteorder='big')
    return base64.urlsafe_b64encode(val_bytes).decode('utf-8').rstrip('=')

def run_pre_auth_flow():
    print("=" * 60)
    print("           INJI CERTIFY - PRE-AUTH CODE FLOW TEST")
    print("=" * 60)

    # Step 1: Health / Metadata Check
    print("\n[Step 1] Fetching Issuer Metadata...")
    try:
        res = requests.get(f"{NGINX_URL}/.well-known/openid-credential-issuer")
        if res.status_code == 200:
            print("  [OK] Metadata fetched successfully!")
            metadata = res.json()
            issuer_id = metadata.get("credential_issuer")
            print(f"  [INFO] Issuer ID: {issuer_id}")
        else:
            print(f"  [FAIL] Failed to fetch metadata: {res.status_code}")
            return
    except Exception as e:
        print(f"  [FAIL] Error connecting to service: {e}")
        return

    # Step 2: Generate Pre-Authorized Code (Admin Portal Sim)
    print("\n[Step 2] Admin Portal: Registering Student & Generating Credential Offer...")
    payload = {
        "credential_configuration_id": "StudentGraduationCredential",
        "claims": {
            "studentId": "STU-2022-001"
        },
        "expires_in": 600,
        "tx_code": "12345"
    }
    
    res = requests.post(f"{CERTIFY_URL}/pre-authorized-data", json=payload)
    if res.status_code != 200:
        print(f"  [FAIL] Failed to generate pre-authorized code: {res.status_code} - {res.text}")
        return
    
    offer_data = res.json()
    print(f"  [DEBUG] Offer Data: {offer_data}")
    offer_uri = offer_data.get("credential_offer_uri")
    if not offer_uri:
        # Check other typical key name
        offer_uri = offer_data.get("credentialOfferUri") or offer_data.get("uri")
    
    print("  [OK] Credential Offer URI generated successfully!")
    print(f"  [LINK] URI: {offer_uri}")

    # Step 3: Wallet Scans QR -> Resolves Offer Data
    print("\n[Step 3] Wallet: Parsing Offer URI & Fetching Offer Details...")
    # The URI format is: openid-credential-offer:///?credential_offer_uri=http://certify-nginx:80/v1/certify/credential-offer-data/some-offer-id
    parsed_url = urlparse(offer_uri)
    queries = parse_qs(parsed_url.query)
    credential_offer_uri = queries.get("credential_offer_uri")[0]
    
    # We replace the internal docker hostname 'certify-nginx:80' with 'localhost:8091' to query it from the host machine
    local_offer_uri = credential_offer_uri.replace("certify-nginx:80", "localhost:8091")
    print(f"  Fetching from: {local_offer_uri}")
    
    res = requests.get(local_offer_uri)
    if res.status_code != 200:
        print(f"  [FAIL] Failed to fetch offer details: {res.status_code} - {res.text}")
        return
        
    offer_details = res.json()
    grants = offer_details.get("grants", {})
    pre_auth_grant = grants.get("urn:ietf:params:oauth:grant-type:pre-authorized_code", {})
    pre_authorized_code = pre_auth_grant.get("pre-authorized_code")
    print("  [OK] Offer details resolved!")
    print(f"  [KEY] Pre-Authorized Code: {pre_authorized_code[:20]}...[truncated]")

    # Step 4: Wallet Exchanges Pre-Auth Code for Bearer Access Token
    print("\n[Step 4] Wallet: Exchanging Code for Access Token...")
    token_payload = {
        "grant_type": "urn:ietf:params:oauth:grant-type:pre-authorized_code",
        "pre-authorized_code": pre_authorized_code,
        "tx_code": "12345"
    }
    
    res = requests.post(f"{CERTIFY_URL}/oauth/token", data=token_payload)
    if res.status_code != 200:
        print(f"  [FAIL] Token exchange failed: {res.status_code} - {res.text}")
        return
        
    token_response = res.json()
    access_token = token_response.get("access_token")
    c_nonce = token_response.get("c_nonce")
    print("  [OK] Access Token and Nonce received!")
    print(f"  Bearer Token: {access_token[:20]}...[truncated]")
    print(f"  c_nonce: {c_nonce}")

    # Step 5: Wallet Generates Proof of Possession (Transient Key Pair)
    print("\n[Step 5] Wallet: Generating Transient Key Pair & JWT Proof of Possession...")
    private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
    public_key = private_key.public_key()
    public_numbers = public_key.public_numbers()
    
    jwk = {
        "kty": "RSA",
        "n": int_to_b64url(public_numbers.n),
        "e": int_to_b64url(public_numbers.e),
        "alg": "RS256",
        "use": "sig"
    }
    
    header = {
        "alg": "RS256",
        "typ": "openid4vci-proof+jwt",
        "jwk": jwk
    }
    
    proof_claims = {
        "aud": issuer_id,
        "nonce": c_nonce,
        "iat": int(time.time())
    }
    
    # Sign the proof JWT
    # We serialize the private key to PEM to sign it using pyjwt
    signed_jwt = jwt.encode(proof_claims, private_key, algorithm="RS256", headers=header)
    print("  [OK] JWT Proof of Possession signed successfully!")

    # Step 6: Wallet Requests the Verifiable Credential
    print("\n[Step 6] Wallet: Requesting Verifiable Credential from Certify...")
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    
    cred_request = {
        "format": "ldp_vc",
        "credential_definition": {
            "@context": [
                "https://www.w3.org/2018/credentials/v1"
            ],
            "type": [
                "VerifiableCredential",
                "StudentGraduationCredential"
            ]
        },
        "proof": {
            "proof_type": "jwt",
            "jwt": signed_jwt
        }
    }
    
    res = requests.post(f"{CERTIFY_URL}/issuance/credential", json=cred_request, headers=headers)
    if res.status_code not in (200, 201):
        print(f"  [FAIL] Failed to fetch Verifiable Credential: {res.status_code} - {res.text}")
        return
        
    result = res.json()
    print("  [OK] Verifiable Credential received successfully! [DONE]")
    
    # Save the VC to disk
    with open("issued_credential.json", "w") as f:
        json.dump(result, f, indent=2)
    print("  [FILE] Saved VC to 'issued_credential.json'")
    
    print("\n" + "=" * 60)
    print("               ISSUED VERIFIABLE CREDENTIAL")
    print("=" * 60)
    print(json.dumps(result, indent=2))
    print("=" * 60)

if __name__ == "__main__":
    run_pre_auth_flow()
