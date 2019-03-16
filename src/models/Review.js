const mongoose = require('mongoose');
const User = require('./User');

let ReviewSchema = mongoose.Schema({
    user: User,
    postedOn: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    review: {
        type: String
    }
});

let Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;