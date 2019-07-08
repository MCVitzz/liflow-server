var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


var util = require('util');
var database = require('./models/database');

app.get('/', function (req, res) {
    res.send('Liflow API');
 });

app.post('/users/add', function(req, res) {
    var user = req.body.Username;
    var email = req.body.Email;
    var firstName = req.body.FirstName;
    var lastName = req.body.LastName;
    var password = req.body.Password;
    var passwordSalt = req.body.PasswordSalt;
    var query = `INSERT INTO Users (User, Email, FirstName, LastName, Password, PasswordSalt) ' +
        'VALUES \'${user}\', \'${email}\', \'${firstName}\', \'${lastName}\', \'${password}\', \'${passwordSalt}\'`,
        user, email, firstName, lastName, password, passwordSalt;
    database.executeCommand(query);
    res.end('Username added.');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});