const mongoose = require('mongoose')

const Schema = mongoose.Schema


const sushiSchema = new Schema({
    title: String,
    price: Number,
    desription: String,
    image: String,
    weight: Number,
    discount: Number,
    productType: String
})

module.exports = mongoose.model('sushi', sushiSchema)