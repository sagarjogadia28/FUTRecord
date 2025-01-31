const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/user.model')
require('dotenv-expand')(require('dotenv').config({path: __dirname + '/../.env'}))

//Serialize and deserialize user for sessions
passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    })
})

//Google strategy to authenticate the user
passport.use(
    new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/redirect'
        },
        async (accessToken, refreshToken, profile, done) => {
            //Check if user already exists in the DB
            try {
                let user = await User.findOne({googleID: profile.id})
                if (!user)
                    user = await User.create({username: profile.displayName, googleID: profile.id})
                done(null, user)

            } catch (err) {
                console.log(err)
            }
        })
)