const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
var privateKEY = fs.readFileSync(path.join(__dirname, '../private.key'), "utf-8");

var i = "UdomsukService"; //Issuer
var s = "UdomsukService@gmail.com" //Subject
var a = "https://google.com" //Audience

module.exports = {
    sign: (payload, expiresIn) => {
        var signOptions = {
            issuer: i,
            subject: s,
            audience: a,
            expiresIn: expiresIn,
            algorithm: "RS256"
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },
}