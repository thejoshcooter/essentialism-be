// restricted middleware
// dependencies
const jwt = require('jsonwebtoken');
const secrets = require('../api/auth/secrets');

module.exports = function restricted(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "invalid token" });
            } else {
                res.username = decodedToken.username;
                next();
            }
        })
    } else {
        res.status(400).json({ message: "no token provided" });
    }
}