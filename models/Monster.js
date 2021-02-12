const { Schema, model } = require('mongoose');

const monsterSchema = new Schema({
    index: String,
    name: String,
    url: String,
    notes: String
})

module.exports = model('Monster', monsterSchema)