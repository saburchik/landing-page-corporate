const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const { db } = require('./models/User');

const app = express();

// DB Config
// require('dotenv/config');

// Connect to Mongo
mongoose.connect('mongodb + srv://sab123:sab12345@regist1.aqdsk.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('MongoDB connected...')
);

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// BodyParser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// CSS
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))