var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Liflow API');
});

require('./models/db')(app);
require('./routes/users')(app);

var server = app.listen(3000, function() {
    console.log(`Server listening at ${port}`);
});