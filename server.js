require('dotenv-expand')(require('dotenv').config({path: __dirname + '/../.env'}))
require('./config/passport-setup')

const express = require('express')
const passport = require('passport')
const cookieSession = require('cookie-session')
const PORT = process.env.PORT || 5000
const app = express()
const connectDB = require('./db')

//Encrypts the key and makes sure that it is day long, sends it to the browser
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //1 day in milliseconds
    keys: [process.env.COOKIE_KEY]
}))

//Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

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
