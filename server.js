require('dotenv-expand')(require('dotenv').config({path: __dirname + '/../.env'}))
require('./config/passport-setup')

const express = require('express')
const passport = require('passport')
const cookieSession = require('cookie-session')
const PORT = process.env.PORT || 5000
const app = express()
const connectDB = require('./db')
const cors = require('cors')

//Encrypts the key and makes sure that it is day long, sends it to the browser
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //1 day in milliseconds
    keys: [process.env.COOKIE_KEY]
}))
//
// app.all('*', function(req, res, next) {
//     console.log('In Server');
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });


//Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    })
);


//Connect to MongoDB
connectDB()

//Start the server
app.listen(PORT, () => console.log(`Server has started on port : ${PORT}...`))

//Initialize Middleware
app.use(express.json({extended: false}))

//Routes
app.use('/', require('./routes/home'))
app.use('/auth', require('./routes/auth'))
app.use('/weekends', require('./routes/weekends'))
app.use('/matches', require('./routes/matches'))
