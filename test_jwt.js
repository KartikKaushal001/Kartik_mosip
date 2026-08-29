const fs = require('fs');
const pmlibCode = fs.readFileSync('postman-pmlib-code.js', 'utf8');

let pmlib;
const fn = new Function(pmlibCode);
fn();
pmlib = global.pmlib || this.pmlib;

const keyPair = pmlib.rs.KEYUTIL.generateKeypair("RSA", 2048);
const jwkPrivateKey = pmlib.rs.KEYUTIL.getJWK(keyPair.prvKeyObj);
const jwkPublicKey  = pmlib.rs.KEYUTIL.getJWK(keyPair.pubKeyObj);

console.log("Original jwkPrivateKey.kid:", jwkPrivateKey.kid);
delete jwkPrivateKey.kid;
delete jwkPublicKey.kid;

jwkPublicKey["alg"] = "RS256";
jwkPublicKey["use"] = "sig";

var header = {	
	"alg": "RS256",
    "typ" : "openid4vci-proof+jwt",
    "jwk" : jwkPublicKey
};

const jwt = pmlib.jwtSign(jwkPrivateKey, {
    "aud" : "http://localhost:8090",
    "nonce": "12345"
}, header, 600, "RS256");

const parts = jwt.split('.');
console.log("HEADER:", Buffer.from(parts[0], 'base64').toString());
console.log("PAYLOAD:", Buffer.from(parts[1], 'base64').toString());
