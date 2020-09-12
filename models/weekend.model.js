const mongoose = require('mongoose')
const matchSchema = require('./match.model')
const Schema = mongoose.Schema

const weekendSchema = new Schema({
    name: {type: String, required: true},
    totalWins: {type: Number, default: 0},
    totalLosses: {type: Number, default: 0},
    notPlayed: {type: Number, default: 30},
    rank: {type: String, default: 'Unranked'},
    matches: [matchSchema]
})

module.exports = weekendSchema