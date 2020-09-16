const router = require('express').Router()
const passport = require('passport')
const CLIENT_URL = 'http://localhost:3000'

// @desc: Get the logged in user on success auth
// @path: /auth/login/success
router.get('/login/success', (req, res) => {
    if (req.user) {
        res.json({
            user: req.user,
            msg: "User has been successfully authenticated"
        })
    }
})

// @desc: Redirect the user to the OAuth provider Google for authentication
// @path: /auth/google
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile']
    })
)

// @desc: The OAuth provider Google has redirected the user back to the application
// @path: /auth/google/redirect
router.get('/google/redirect',
    passport.authenticate('google', {
            successRedirect: CLIENT_URL + '/dashboard',
            failureRedirect: CLIENT_URL
        }
    )
)

// @desc: Logout the user and redirect to home page
// @path: /auth/logout
router.get('/logout', (req, res) => {
    //Handle with Passport
    req.logout()
    res.redirect(CLIENT_URL)
})

module.exports = router