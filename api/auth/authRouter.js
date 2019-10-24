// init router
const express = require('express');
const router = express.Router();
// dependencies
const bcrypt = require('bcrypt');

// import model
const Auth = require('./authModel');

// import helpers
const responseHandler = require('../../helpers/responseHandler');
const generateToken = require('../../helpers/generateToken');

// routes

// register route
router.post('/register', (req, res) => {
    const payload = req.body;
    payload.password = bcrypt.hashSync(payload.password, 12);
    
    Auth.add(payload)
    .then(newUser => {
        res.status(200).json({
            message: "successfully added new user",
            user: payload
        });
    })
    .catch(err => {
        responseHandler(res, 500, "error registering");
    });
});

// login route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    !email || !password ?
    responseHandler(res, 401, "username and password required") :
    console.log('username and password provided');

    Auth.findFilter({ email })
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: `Welcome ${user.first_name}`, token });
        } else {
            responseHandler(res, 404, "user does not exist");
        }
    })
    .catch(err => {
        responseHandler(res, 500, "error logging in");
    });


});

// fallback
router.use('/', (req, res) => {
    responseHandler(res, 200, "hi from auth router");
});

// export router
module.exports = router; 