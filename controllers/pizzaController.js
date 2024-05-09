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
        image: req.body.image,
        desription: req.body.desription,
        weight: req.body.weight,
        bortyk: req.body.bortyk,
        discount: req.body.discount,
        productType: req.body.productType
    })
    res.send('good')
}