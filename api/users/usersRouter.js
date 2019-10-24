// init usersRouter
const express = require('express');
const router = express.Router();

// import models
const Users = require('./usersModel');
const Values = require('../values/valuesModel');

// import middleware
// todo

// import helpers
const responseHandler = require('../../helpers/responseHandler');

// routes

// get all users
// need to clean up this endpoint after mvp
router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ message: "error getting users" });
    });
});

// get user by id
// need to clean up this endpoint after mvp
router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    Users.findById(id)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        responseHandler(res, 500, "error getting user by id");
    });
})

// get user by id with values
// need to clean up this endpoint after mvp
router.get('/:id/values', (req, res) => {
    const id = req.params.id;

    Users.findById(id)
    .then(user => {
        Users.findValues(id)
        .then(values => {
            const userValues = values.map(v => {
                return v.name;
            })
            res.status(200).json({ ...user, values: userValues });
        })
        .catch(err => {
            responseHandler(res, 500, "error getting values");
        });
    })
    .catch(err => {
        responseHandler(res, 500, "error finding user");
    });
    
    
});

// delete a user
// need to clean up this endpoint after mvp
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    console.log(id);
    
    Users.remove(id)
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        responseHandler(res, 500, "error deleting user");
    });
});

// add a value to a user by id
// need to clean up this endpoint after mvp
router.post('/:id/values', (req, res) => {
    const userId = req.params.id;
    const valueId = req.body.value_id;

    Values.addUserValue(userId, valueId)
    .then(value => {
        res.status(200).json(value);
    })
    .catch(err => {
        res.status(500).json(err)
    });
});

// fallback
router.use('/', (req, res) => {
    res.status(200).json({ message: "hi from users router" });
});

// export router
module.exports = router;