// token generator
const jwt = require('jsonwebtoken');
const secrets = require('../api/auth/secrets');

module.exports = function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secrets.jwtSecret, options);
}