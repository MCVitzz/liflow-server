var User = require('../models/users');

module.exports = function(app, db) {
    app.post('/users/add', function(req, res) {
        var user = new User(req.body);
        user.save();
        res.send('User added successfully.');
    });
};