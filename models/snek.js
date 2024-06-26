const mongoose = require('mongoose')

const Schema = mongoose.Schema

const snekSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    weight: Number,
    discount: Number,
    productType: String
})

module.exports = mongoose.model('snek', snekSchema)