const express = require('express');
const router = express.Router();
const User = require('../models/User').User;
const Course = require('../models/Course');

// GET /users
router.get('/users', (req, res, next) => {
    res.status(200);
    res.end();
});

// POST /users
router.post('/users', (req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err) return res.send(err.message);
        res.status(201);
        res.setHeader('Location', '/');
        res.send('');
    })
});

// GET /courses
router.get('/courses', (req, res, next) => {
    Course.find({}, '_id title', function(err, course){
        res.status(200);
        res.send(course);
    });
});

// GET /courses/:courseID
router.get('/courses/:courseID', (req, res, next) => {
    Course.findById(req.params.courseID)
    .populate('reviews')
    .populate('user')
    .exec(function (err, course){
        res.json(course);
    });
});

// POST /courses
router.post('/courses', (req, res, next) => {
    Course.create(req.body, (err, course) => {
        if (err) return res.send(err.message);
        res.status(201);
        res.setHeader('Location', '/');
        res.send('');
    });
});

router.put('/courses/:courseID', (req, res, next) => {
    
});


module.exports = router;