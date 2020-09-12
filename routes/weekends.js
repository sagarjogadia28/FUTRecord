const router = require('express').Router()
const User = require('../models/user.model')
const Weekend = require('../models/weekend.model')
const {ensureAuth} = require('../middleware/auth')

// @desc: GET the weekends details
// @path: /weekends/
router.get('/', ensureAuth, (req, res) => {
    User.findOne({googleID: req.user.googleID})
        .then(currentUser => {
            res.send(currentUser.weekends)
        })
})

// @desc: GET the specific weekend details
// @path: /weekends/1
router.get('/:position', ensureAuth, async (req, res) => {
    try {
        const user = await User.findOne({googleID: req.user.googleID})
        const weekend = user.weekends[req.params.position]
        if (weekend === undefined)
            res.redirect('/weekends')
        else
            res.send(weekend)
    } catch (err) {
        console.log(err)
    }
})

// @desc: POST the specific weekend details
// @path: /weekends/add
router.post('/add', ensureAuth, async (req, res) => {
    try {
        let user = await User.findOne({googleID: req.user.googleID})
        user.weekends.push(req.body)
        await user.save()
    } catch (err) {
        console.log(err);
    }
})

module.exports = router