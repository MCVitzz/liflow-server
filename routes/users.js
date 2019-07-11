var User = require('../models/users');

module.exports = function(app) {
    app.post('/users/add', function(req, res) {
        var user = new User(req.body);
        user.save();
        res.send('User added successfully.');
    });

    app.get('/users/get', function(req, res) {
        var user = req.query.user;
        if(user)
            User.findOne({'Username': user}, function(err, doc) {
                if(err)
                    throw err;
                res.json(doc);
            });
        else
            User.find(function(err, docs) {
                if(err)
                    throw err;
                res.json(docs);
            });
    });
};