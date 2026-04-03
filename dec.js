const JSRSASign = require("jsrsasign");

const sJWS = "votre_token_jwt_ici"; // Ajout de la variable manquante
const aJWT = sJWS.split(".");

const uHeader = JSRSASign.b64utos(aJWT[0]);
const uClaim = JSRSASign.b64utos(aJWT[1]);

const pHeader = JSRSASign.jws.JWS.readSafeJSONString(uHeader);
const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);

console.log(pHeader);
console.log(pClaim);