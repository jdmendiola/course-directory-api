const express = require('express');
const router = express.Router();
const User = require('../models/User').User;
const Course = require('../models/Course');
const Review = require('../models/Review');

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
    Course.find({}, '_id title', (err, course) => {
        res.status(200);
        res.send(course);
    });
});

// GET /courses/:courseID
router.get('/courses/:courseID', (req, res, next) => {
    Course.findById(req.params.courseID)
    .populate({
        path: 'reviews',
        populate: {
            path: 'user',
            select: 'fullName'
        }
    })
    .populate('user', 'fullName')
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

// PUT /course/:courseID
router.put('/courses/:courseID', (req, res, next) => {
    Course.update({ _id: req.params.courseID }, req.body, (err, course) => {
        if (err) return res.send(err.message);
        res.status(204);
        res.json(course);
        res.send('');
    });
});

// POST /course/:courseID/reviews
router.post('/courses/:courseID/reviews', (req, res, next) => {
    Course.findById(req.params.courseID, (err, course) => {
        if (err) return res.send(err.message);
        Review.create(req.body, (err, review) => {
            if (err) return res.send(err.message);
            course.reviews.push(review);
            course.save((err, course) => {
                if (err) return res.send(err.message);
                res.status(201);
                res.setHeader('Location', `/api/courses/${req.params.courseID}`);
                res.send('');
            });
        });
    });
});

module.exports = router;