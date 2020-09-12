const router = require('express').Router()
const path = require('path');
const {ensureAuth, ensureLoggedIn} = require('../middleware/auth')

// @desc: Get the weekends details
// @path: /
router.get('/', ensureLoggedIn, (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../')})
})

router.get('/dashboard', ensureAuth, (req, res) => {
    res.sendFile('dashboard.html', {root: path.join(__dirname, '../')})
})

module.exports = router