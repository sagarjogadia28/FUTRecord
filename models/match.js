const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchSchema = new Schema({
    myScore: {type: Number, default: 0},
    oppScore: {type: Number, default: 0},
    home: {type: Boolean, default: false},
    extraTime: {type: Boolean, default: false},
    penalties: {type: Boolean, default: false},
    disconnect: {type: Boolean, default: false}
})

module.exports = matchSchema