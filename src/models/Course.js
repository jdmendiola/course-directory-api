const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CourseSchema = mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    estimatedTime: {
        type: String
    },
    materialsNeeded: {
        type: String
    },
    steps: [
        {
            stepNumber: {
                type: String
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}]
});

let Course = mongoose.model('Course', CourseSchema);
module.exports = Course;