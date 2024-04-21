const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pizzaSchema = new Schema({
    title: String,
    price: Number,
    desription: String,
    image: String,
    weight: Number
})

module.exports = mongoose.model('pizza', pizzaSchema)