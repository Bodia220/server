const Sushi = require('../models/sushi')


exports.getSushies = async (req, res) => {
    const sushies = await Sushi.find({})
    res.send(sushies)
}


exports.getSushi = async (req, res) => {
    const sushi = await Sushi.findById(req.params.id)
    res.send(sushi)
}


exports.addSushi = async (req, res) => {
    let result = await Sushi.create({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        desription: req.body.desription,
        weight: req.body.weight,
        discount: req.body.discount,
        productType: req.body.productType
    })
    res.send('good')
}