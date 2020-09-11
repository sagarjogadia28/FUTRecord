require('dotenv-expand')(require('dotenv').config({path: __dirname + '/../.env'}))
require('./config/passport-setup')

const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const PORT = process.env.PORT || 3000
const app = express()

//Encrypts the key and makes sure that it is day long, sends it to the browser
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //1 day in milliseconds
    keys: [process.env.COOKIE_KEY]
}))

//Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

//Create HOME route
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', err => console.log(err))
db.once('open', () => console.log('Connected to Database'))

//Start the server
app.listen(PORT, () => console.log(`Server has started on port : ${PORT}...`))

//Routes
app.use('/auth', require('./routes/auth'))
app.use('/profile', require('./routes/profile'))
