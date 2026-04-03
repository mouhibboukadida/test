const JSRSASign = require("jsrsasign");
const claims = {
 Username: "ahmed",
 Age: 27,
 FullName: "Ahmed Hassan",
};
const key="$AhmedIsAwesome!";
const header = {
     alg: "HS512",
    type  : "JWT"
 };
var sHeader = JSON.stringify(header);
var sPayload = JSON.stringify(claims);
const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);
console.log(sJWT);
