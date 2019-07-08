module.exports = function(app) {
    var mongoose = require('mongoose');
    var url = 'mongodb://Testing:traquinas21@ds249137.mlab.com:49137/heroku_26fwbx2t';

    mongoose.connect(url, {useNewUrlParser: true}, function() {
        console.log('Connected to Database.');
    });
};