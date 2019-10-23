var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listsSchema = new Schema({
    user: {
        type:String
    },
    list: {
        type:String
    },
    title: {
        type:String
    },
    description: {
        type:String
    },
});

var Lists = mongoose.model('lists', listsSchema);

module.exports = Lists;