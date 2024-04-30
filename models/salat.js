const mongoose = require('mongoose')

const Schema = mongoose.Schema

const salatSchema = new Schema({
    title: String,
    price: Number,
    desription: String,
    image: String,
    weight: Number
})

module.exports = mongoose.model('salat', salatSchema)