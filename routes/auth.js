const router = require('express').Router()
const passport = require('passport')

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
            successRedirect: '/dashboard',
            failureRedirect: '/'
        }
    )
)

// @desc: Logout the user and redirect to home page
// @path: /auth/logout
router.get('/logout', (req, res) => {
    //Handle with Passport
    req.logout()
    res.redirect('/')
})

module.exports = router