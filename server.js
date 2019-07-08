var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
require('dotenv').config();

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Liflow API');
});

require('./models/db')(app);
require('./routes/users')(app);

var server = app.listen(3000, function() {
    console.log(`Server listening at ${port}`);
});

var reqTimer = setTimeout(function wakeUp() {
    request(`${process.env.HOST}.herokuapp.com`, function() {
        console.log(`${JSON.stringify(process.env)}`);
        console.log('WAKE UP DYNO');
    });
    return reqTimer = setTimeout(wakeUp, 12);
 }, 12);