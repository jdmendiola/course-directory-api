// const mongoose = require('mongoose');
// const User = require('./User');
// const Review = require('./Review');

// let CourseSchema = mongoose.Schema({
//     user: User,
//     title: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     estimatedTime: {
//         type: String
//     },
//     materialsNeeded: {
//         type: String
//     },
//     steps: [
//         {
//             stepNumber: {
//                 type: String
//             },
//             title: {
//                 type: String,
//                 required: true
//             },
//             description: {
//                 type: String,
//                 required: true
//             }
//         }
//     ],
//     reviews: [Review]
// });

// let Course = mongoose.model('Course', CourseSchema);
// module.exports = Course;