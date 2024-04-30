const mongoose = require('mongoose')

const Schema = mongoose.Schema


const drinksSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    weight: Number
})

module.exports = mongoose.model('drinks', drinksSchema)