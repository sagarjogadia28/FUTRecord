const mongoose = require('mongoose')
require('dotenv-expand')(require('dotenv').config({path: __dirname + '/../.env'}))

//Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Connected to Database')
    } catch (err) {
        //Exit the process with failure
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB