// init valuesRouter
const express = require('express');
const router = express.Router();

// model
const Values = require('./valuesModel');

// middleware 
const valueValidator = require('../../middleware/valueValidator');

// helpers
const responseHandler = require('../../helpers/responseHandler');

// routes

// get all values
// need to clean up this endpoint after mvp 
router.get('/', (req, res) => {
    Values.find()
    .then(values => {
        res.status(200).json(values);
    })
    .catch(err => {
        responseHandler(res, 500, "error getting all values");
    });
});

// add a value
// need to clean up this endpoint after mvp
router.post('/', valueValidator, (req, res) => {
    const payload = req.body;
    
    Values.add(payload)
    .then(value => {
        res.status(200).json(payload);
    })
    .catch(err => {
        responseHandler(res, 500, "error adding value");
    });
});

// update a value
// need to clean up this endpoint after mvp and add middleware
router.put('/:id', valueValidator, (req, res) => {
    const id = req.params.id;
    const payload = req.body;

    Values.update(id, payload)
    .then(updatedValue => {
        res.status(200).json(payload);
    })
    .catch(err => {
        responseHandler(res, 500, "error updating value");
    });

});

// delete a value
// need to clean up this endpoint after mvp
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Values.remove(id)
    .then(value => {
        res.status(200).json({ message: "value deleted" });
    })
    .catch(err => {
        responseHandler(res, 500, "error deleting value");
    });
});

// fallback
// need to clean up this endpoint after mvp
router.use('/', (req, res) => {
    responseHandler(res, 200, "hi from valuesRouter");
});

// export
module.exports = router;