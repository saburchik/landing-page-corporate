const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/User');

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    let errors = [];

    // Check required fields
    if (!name || !email || !password) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check pass length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password
        });
    } else {
        // Validation passed
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    // User exists
                    errors.push({ msg: 'Email is already registered' });
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });
                    console.log(newUser)
                    res.send('hello');
                }
            });
    }
});

module.exports = router;