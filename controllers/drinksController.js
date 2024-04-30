const Drink = require('../models/drinks')


exports.getDrinks = async (req, res) => {
    const drinks = await Drink.find({})
    res.send(drinks)
}

exports.getDrink = async (req, res) => {
    const drink = await Drink.findById(req.params.id)
    res.send(drink)
}

exports.addDrink = async (req, res) => {
    let result = await Drink.create({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        weight: req.body.weight
    })
    res.send('good')
}