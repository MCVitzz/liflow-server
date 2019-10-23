var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Username: {
        type:String
    },
    Email: {
        type:String
    },
    FirstName: {
        type:String
    },
    LastName: {
        type:String
    },
    Password: {
        type:String
    }
});

var User = mongoose.model('user', userSchema);

module.exports = User;