const JSRSASign = require("jsrsasign");
const token =
"eyJhbGciOiJIUzUxMiIsInR5cGUiOiJKV1QifQ.eyJVc2VybmFtZSI6ImFobWVkIiwiQWdlIjoyNywiRnVsbE5hbWUiOiJBaG1lZCBIYXNzYW4ifQ.CrzC94mBeMvwdf7YAYhpSpUXqJQum2qcYPOsVc8TcLdo368FkPfxsA1cr_HWLFaMRCo1V05gXGUproiSZkHRsA";
const algorithm = "HS512";
const key = "$ahmedkeyforjwt!";
console.log(
 JSRSASign.jws.JWS.verifyJWT(token, key, {
 alg: [algorithm]
 })
);
true;
