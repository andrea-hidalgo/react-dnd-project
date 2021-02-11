const { Schema, model } = require('mongoose');

const Monster = new Schema({
    index: String,
    name: String,
    url: String,
    notes: String
})