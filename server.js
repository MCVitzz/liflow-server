const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const listsRoute = require('./routes/lists');

//Configure environment variables and server port
dotenv.config();
const PORT = process.env.PORT || 3000;

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => console.log('Connected to Database'));

//Main request
app.get('/', function (req, res) {
    res.send('Liflow API');
});

//Middleware
app.use(express.json());

app.listen(PORT, () => console.log(`Running on port ${PORT}`));