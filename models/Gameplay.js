// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Gameplay = new Schema({
    gamertag: String,
    name: String,
    url: String
})

module.exports = mongoose.model('Gameplay', Gameplay)