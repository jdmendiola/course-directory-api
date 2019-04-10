const express = require('express');
const router = express.Router();
const User = require('../models/User').User;

router.get('/users', (req, res, next) => {
    res.status(200);
    res.end();
});

router.post('/users', (req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);
    })
});

module.exports = router;