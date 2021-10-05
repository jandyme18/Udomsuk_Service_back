const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
var publicKEY = fs.readFileSync(path.join(__dirname, '../public.key'), "utf-8");
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
    verify: (req, res, next) => {
        var token = req.headers.authorization
            ? req.headers.authorization.split(' ')[1] : null;
        if (!token)
            return res.status(403).json({ auth: false, message: "No Token Provided" });

        var verifyOptions = {
            issuer: i,
            subject: s,
            audience: a,
            expiresIn: '600', //minutes
            algorithm: ["RS256"]
        };

        jwt.verify(token, publicKEY, verifyOptions, (err, decoded) => {
            if (err) {
                if (err.name == "TokenExpiredError") {
                    return res.status(401).json({ auth: false, message: 'token expired' });
                } else {
                    return res.status(500).json({ auth: false, message: err });
                }
            }

            req.userId = decoded.id;
            req.userLevel = decoded.level;
            next();
        })
    }
}