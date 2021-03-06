const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/', (req, res) => {
    Movie.find(req.query).then(data => res.json(data))
});

router.post('/', (req, res) => {
    const movie = new Movie(req.body);

    console.log(req.body);

    movie.save()
        .then(data => res.status(201).send(data))
        .catch(error => {
            if (error.name === 'ValidationError') {
                res.status(400).json(error.errors);
            }else {
                res.sendStatus(500);
            }
        });
});

module.exports = router;
