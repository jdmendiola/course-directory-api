'use strict';

// load modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Review = require('./models/Review');
const Course = require('./models/Course');
const routes = require('./routes');
const session = require('express-session');

const app = express();

// connect mongodb
mongoose.connect("mongodb://localhost:27017/course-api");

let db = mongoose.connection;

db.on("error", function(err){
	console.error("db connection error:", err);
});

db.once("open", function(){
	console.log("db connection successful");
});

// set our port
app.set('port', process.env.PORT || 5000);

// morgan gives us http request logging
app.use(morgan('dev'));

// user sessions
app.use(session({
	secret: 'nba playoffs',
	resave: true,
	saveUninitialized: false
}));

// Parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// TODO add additional routes here
app.use('/api', routes);

// send a friendly greeting for the root route
app.get('/', (req, res, next) => {
	res.json({
		message: 'Welcome to the Course Review API'
	});
});

// uncomment this route in order to test the global error handler
// app.get('/error', function (req, res) {
//   throw new Error('Test error');
// });

// send 404 if no other route matched
app.use((req, res) => {
	res.status(404).json({
		message: 'Route Not Found'
	})
})

// global error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500).json({
		message: err.message,
		error: {}
	});
});

// start listening on our port
const server = app.listen(app.get('port'), () => {
	console.log(`Express server is listening on port ${server.address().port}`);
});
