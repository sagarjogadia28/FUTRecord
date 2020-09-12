const mongoose = require('mongoose')
const Schema = mongoose.Schema
const weekendSchema = require('./weekend.model')

const userSchema = new Schema({
    username: {type: String, required: true},
    googleID: {type: String, required: true},
    weekends: [weekendSchema]
})

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel