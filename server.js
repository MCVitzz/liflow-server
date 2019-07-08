var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
require('dotenv').config();

var app = express();
const port = process.env.PORT || 3000;
var production = 'https://liflow.herokuapp.com/';
var development = 'http://localhost';
const address = process.env.ENV ? production : development;

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
    request(`${address}.herokuapp.com`, function() {
        console.log('WAKE UP DYNO');
    });
    return reqTimer = setTimeout(wakeUp, 1200000);
 }, 1200000);