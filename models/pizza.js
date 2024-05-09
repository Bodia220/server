const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pizzaSchema = new Schema({
    title: String,
    price: Array,
    desription: String,
    image: String,
    weight: Array,
    bortyk: Array,
    discount: Array,
    productType: String
})

module.exports = mongoose.model('pizza', pizzaSchema)