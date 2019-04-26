const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
    User.find(req.query).then(data => res.json(data));
});

router.get('/:id', (req, res) => {
    User.findOne({ '_id': req.params.id }).then(data => res.json(data)).catch(error => {
        console.log(error);
        if (error.name == 'CastError') {
            res.status(422).json({"message": "Invalid id"});
        } else {
            res.sendStatus(500);
        }
    })
});

router.put('/:id', (req, res) => {
    User.findOne({ _id: req.params.id }).populate(req.body);
    //User.findOne({ 'id': `${req.params.id}` }).then(data => res.json(data))
});

router.post('/', (req, res) => {
    const user = new User(req.body);

    user.save()
        .then(data => res.status(201).send(data))
        .catch(error => {
            if (error.name === 'ValidationError') {
                res.status(400).json(error.errors);
            } else {
                res.sendStatus(500);
            }
        });
});

module.exports = router;
