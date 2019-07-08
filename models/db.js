module.exports = function(app) {
    var mongoose = require('mongoose');
    require('dotenv').config();
    var user = process.env.USER;
    var pass = process.env.PASS;
    var url = `mongodb://${user}:${pass}@ds249137.mlab.com:49137/heroku_26fwbx2t`;

    mongoose.connect(url, {useNewUrlParser: true}, function() {
        console.log('Connected to Database.');
    });
};