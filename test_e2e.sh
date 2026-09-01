#!/usr/bin/env bash
set -e

DIR="/home/onesine/gitClone/Kartik_mosip/docker-compose/docker-compose-injistack"
cd "$DIR"

echo "=== 1. Starting Stack Services ==="
docker compose down -v 2>/dev/null || true
docker rm -f database certify certify-nginx inji-usecase 2>/dev/null || true
docker compose up -d database certify certify-nginx inji-usecase

echo "=== 2. Waiting for services to initialize ==="
echo -n "Waiting for inji-usecase to be ready..."
for i in {1..30}; do
  UNAUTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8085/api/students || true)
  if [ "$UNAUTH_CHECK" -eq 401 ]; then
    echo " OK"
    break
  fi
  echo -n "."
  sleep 1
done

echo -n "Waiting for Certify service to be ready..."
for i in {1..40}; do
  CERTIFY_CHECK=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8091/v1/certify/credential-issuer/.well-known/openid-credential-issuer || true)
  if [ "$CERTIFY_CHECK" -eq 200 ]; then
    echo " OK"
    break
  fi
  echo -n "."
  sleep 1
done

API_KEY="certify-admin-key-change-me"
STUDENT_ID="STU-2022-001"

echo "=== 3. TC-DOCKER-06: Testing request WITHOUT API key (expects 401) ==="
UNAUTH_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8085/api/students || true)
echo "HTTP Status: $UNAUTH_CODE"
if [ "$UNAUTH_CODE" -ne 401 ]; then
    echo "FAILED TC-DOCKER-06: Expected 401 but got $UNAUTH_CODE"
    exit 1
fi
echo "PASS TC-DOCKER-06: 401 Unauthorized received"

echo "=== 4. TC-DOCKER-07: Testing request WITH valid API key (expects 200) ==="
AUTH_RESP=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -H "X-API-Key: $API_KEY" http://localhost:8085/api/students)
HTTP_STATUS=$(echo "$AUTH_RESP" | grep "HTTP_STATUS:" | cut -d: -f2)
BODY=$(echo "$AUTH_RESP" | grep -v "HTTP_STATUS:")
echo "HTTP Status: $HTTP_STATUS"
if [ "$HTTP_STATUS" -ne 200 ]; then
    echo "FAILED TC-DOCKER-07: Expected 200 but got $HTTP_STATUS"
    exit 1
fi
echo "PASS TC-DOCKER-07: 200 OK received, student list retrieved"

echo "=== 5. TC-E2E-01: Triggering Credential Offer for $STUDENT_ID ==="
OFFER_RESP=$(curl -s -w "\nHTTP_STATUS:%{http_code}" \
  -H "X-API-Key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"expiresInSeconds": 600, "txCode": "12345"}' \
  http://localhost:8085/api/students/$STUDENT_ID/request-credential)

OFFER_STATUS=$(echo "$OFFER_RESP" | grep "HTTP_STATUS:" | cut -d: -f2)
OFFER_BODY=$(echo "$OFFER_RESP" | grep -v "HTTP_STATUS:")
echo "HTTP Status: $OFFER_STATUS"
echo "Response Body: $OFFER_BODY"

if [ "$OFFER_STATUS" -ne 200 ]; then
    echo "FAILED TC-E2E-01: Expected 200 but got $OFFER_STATUS"
    exit 1
fi

OFFER_URI=$(echo "$OFFER_BODY" | grep -o '"credentialOfferUri":"[^"]*' | cut -d'"' -f4)
echo "Extracted Credential Offer URI: $OFFER_URI"
echo "PASS TC-E2E-01: Credential Offer URI generated successfully"

echo "=== 6. TC-E2E-02: Fetching Credential Offer details from Certify via Nginx ==="
# Extract URL from openid-credential-offer://?credential_offer_uri=...
RAW_OFFER_URL=$(echo "$OFFER_URI" | sed 's/.*credential_offer_uri=//')
# URL decode
DECODED_URL=$(python3 -c "import sys, urllib.parse; print(urllib.parse.unquote('$RAW_OFFER_URL'))")
# Replace docker-internal host/port (e.g. certify-nginx:80) with localhost:8091 for host access
TARGET_URL=$(echo "$DECODED_URL" | sed 's|http://certify-nginx:80|http://localhost:8091|' | sed 's|http://certify-nginx|http://localhost:8091|')
echo "Target Offer Fetch URL: $TARGET_URL"

FETCH_RESP=$(curl -s -w "\nHTTP_STATUS:%{http_code}" "$TARGET_URL")
FETCH_STATUS=$(echo "$FETCH_RESP" | grep "HTTP_STATUS:" | cut -d: -f2)
FETCH_BODY=$(echo "$FETCH_RESP" | grep -v "HTTP_STATUS:")
echo "Fetch HTTP Status: $FETCH_STATUS"
echo "Fetch Response: $FETCH_BODY"

if [ "$FETCH_STATUS" -ne 200 ]; then
    echo "FAILED TC-E2E-02: Expected 200 but got $FETCH_STATUS"
    exit 1
fi
echo "PASS TC-E2E-02: Credential offer fetched successfully"

echo "=== 7. TC-E2E-03: Exchanging Pre-Authorized Code for Access Token ==="
# Extract pre-authorized_code from FETCH_BODY
PRE_AUTH_CODE=$(python3 -c "import sys, json; data=json.loads('''$FETCH_BODY'''); print(data['grants']['urn:ietf:params:oauth:grant-type:pre-authorized_code']['pre-authorized_code'])")
echo "Extracted Pre-Authorized Code: $PRE_AUTH_CODE"

TOKEN_RESP=$(curl -s -w "\nHTTP_STATUS:%{http_code}" \
  -X POST http://localhost:8091/v1/certify/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:pre-authorized_code&pre-authorized_code=$PRE_AUTH_CODE&tx_code=12345")

TOKEN_STATUS=$(echo "$TOKEN_RESP" | grep "HTTP_STATUS:" | cut -d: -f2)
TOKEN_BODY=$(echo "$TOKEN_RESP" | grep -v "HTTP_STATUS:")
echo "Token Exchange Status: $TOKEN_STATUS"
echo "Token Response: $TOKEN_BODY"

if [ "$TOKEN_STATUS" -ne 200 ]; then
    echo "FAILED TC-E2E-03: Expected 200 but got $TOKEN_STATUS"
    exit 1
fi

ACCESS_TOKEN=$(python3 -c "import sys, json; data=json.loads('''$TOKEN_BODY'''); print(data.get('access_token',''))")
echo "Acquired Access Token: ${ACCESS_TOKEN:0:20}..."
echo "PASS TC-E2E-03: Access token acquired successfully via pre-authorized code"

echo "=== 8. TC-E2E-04: Replay Attack Verification (Reusing same Pre-Auth Code) ==="
REPLAY_RESP=$(curl -s -w "\nHTTP_STATUS:%{http_code}" \
  -X POST http://localhost:8091/v1/certify/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:pre-authorized_code&pre-authorized_code=$PRE_AUTH_CODE&tx_code=12345")

REPLAY_STATUS=$(echo "$REPLAY_RESP" | grep "HTTP_STATUS:" | cut -d: -f2)
echo "Replay Status: $REPLAY_STATUS"
if [ "$REPLAY_STATUS" -eq 200 ]; then
    echo "FAILED TC-E2E-04: Replay attack succeeded! Pre-authorized code was not invalidated upon first use."
    exit 1
fi
echo "PASS TC-E2E-04: Replay attack correctly rejected (HTTP $REPLAY_STATUS)"

echo "======================================================="
echo "  ALL INTEGRATION & E2E TESTS PASSED SUCCESSFULLY!  "
echo "======================================================="

