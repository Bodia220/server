const Pizza = require('../models/pizza')


exports.getPizzas = async (req, res) => {
    const pizzas = await Pizza.find({})
    res.send(pizzas)
}

exports.getPizza = async (req, res) => {
    const pizza = await Pizza.findById(req.params.id)
    res.send(pizza)
}

exports.addPizza = async (req, res) => {
    let result = await Pizza.create({
        title: req.body.title,
        price: req.body.price,
        date: req.body.date,
        image: req.body.image
    })
    res.send('good')
}