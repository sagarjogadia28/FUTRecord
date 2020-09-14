const router = require('express').Router()
const User = require('../models/user.model')
const Match = require('../models/match.model')
const {ensureAuth} = require('../middleware/auth')

// @desc: GET all the match details
// @path: /matches/:weekendNumber
router.get('/:weekendNumber', ensureAuth, async (req, res) => {
    console.log('GET: /matches/:weekendNumber');
    try {
        const user = await User.findOne({googleID: req.user.googleID})
        const weekend = user.weekends[req.params.weekendNumber]
        if (weekend === undefined)
            res.redirect('/weekends')
        else
            res.send(weekend.matches)
    } catch (err) {
        console.log(err)
    }
})

// @desc: GET the match details
// @path: /matches/:weekendNumber/:matchNumber
router.get('/:weekendNumber/:matchNumber', ensureAuth, async (req, res) => {
    console.log('GET: /matches/:weekendNumber/:matchNumber');
    try {
        const user = await User.findOne({googleID: req.user.googleID})
        if (!user)
            return res.status(400).json({msg: 'There is no user with this Google ID'})

        const weekend = user.weekends[req.params.weekendNumber]
        if (weekend === undefined)
            res.redirect('/weekends')
        const match = weekend.matches[req.params.matchNumber]
        if (match === undefined)
            res.redirect('/weekends')
        else
            res.json(match)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})

// @desc: POST the specific match details
// @path: /matches/add
router.post('/add', ensureAuth, async (req, res) => {
    console.log('POST: /matches/add');
    try {
        let user = await User.findOne({googleID: req.user.googleID})
        const weekend = user.weekends[req.body.weekendNumber]
        weekend.matches.push(req.body)
        await user.save()
    } catch (err) {
        console.log(err);
    }
})

module.exports = router