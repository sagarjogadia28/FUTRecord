const router = require('express').Router()

const authCheck = (req, res, next) => {
    if (!req.user) {
        //Not logged-in
        res.redirect('/auth/google')
    } else {
        next()
    }

}

router.get('/', authCheck, (req, res) => {
    res.send('You are logged in: ' + req.user.username)
})

module.exports = router