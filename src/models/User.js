const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    } 
});

let User = mongoose.model('User', UserSchema);
module.exports = User;