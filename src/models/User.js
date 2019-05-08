const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
            message: 'Email must be unique and in correct format.'
        }
    },
    password: {
        type: String,
        required: true
    } 
});

UserSchema.statics.authorize = function(email, password, cb){
    let authorizeQuery = this.findOne({emailAddress: email});
    authorizeQuery.exec((err, result) => {
        if (err){
            return cb(err);
        } else if (result == null){
            let nullError = new Error('That user does not exist.');
            nullError.status = 401;
            return cb(nullError);
        }
        let authorized = bcrypt.compareSync(password, result.password);
        if (authorized){
            return cb(null, result);
        } else {
            let nonAuthorizedError = new Error('Incorrect password.');
            nonAuthorizedError.status = 401;
            return cb(nonAuthorizedError);
        }
    });
}

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password);
    next();
});


let User = mongoose.model('User', UserSchema);
module.exports = User;