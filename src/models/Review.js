const mongoose = require('mongoose');
const User = require('./User');
const UserSchema = require('./User').UserSchema;

const Schema = mongoose.Schema;

let ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
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