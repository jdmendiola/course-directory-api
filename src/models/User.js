const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (value) {
                let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
                return emailRegex.test(value);
            },
            message: 'Not a valid email format'
        }
    },
    password: {
        type: String,
        required: true
    } 
});

let User = mongoose.model('User', UserSchema);
module.exports.User = User;