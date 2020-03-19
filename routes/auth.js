const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {
    registerValidation,
    loginValidation
} = require('../validation');

//Regsitration is handled here
router.post('/register', async (req, res) => {
    //Validation
    const {
        error
    } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if duplicate
    const emailExists = await User.findOne({
        email: req.body.email
    });
    if (emailExists) return res.status(400).send('Email already exists.');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new User
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword
    });

    try {
        //Save
        const savedUser = await user.save();
        res.send({
            user: user._id
        });
    } catch (err) {
        //If error
        res.status(400).send(err);
    }
});

//Login
router.post('/login', async (req, res) => {

    //Validation
    const {
        error
    } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if email exists
    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) return res.status(400).send('Email or password is wrong.');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Email or password is wrong.');

    //Create and sign JWT
    const token = jwt.sign({
        _id: user._id
    }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;