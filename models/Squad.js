// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Squad = new Schema({
    gamertag: String,
    name: String,
    age: String,
    platform: String
})

module.exports = mongoose.model('Squad', Squad)