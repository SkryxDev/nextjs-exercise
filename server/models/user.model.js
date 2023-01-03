const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    job: String
})

module.exports = new mongoose.model('user', userSchema)