var Lists = require('../models/lists');

module.exports = function(app) {
    app.post('/lists/add', function(req, res) {
        var lists = new Lists(req.body);
        lists.save();
        res.send('List added successfully.');
    });

    app.get('/lists/get', function(req, res) {
        var list = req.query.list;
        if(list)
            Lists.findOne({'Username': list}, function(err, doc) {
                if(err)
                    throw err;
                res.json(doc);
            });
        else
            List.find(function(err, docs) {
                if(err)
                    throw err;
                res.json(docs);
            });
    });
};