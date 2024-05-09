const Snek = require('../models/snek')


exports.getSneks = async (req, res) => {
    const sneks = await Snek.find({})
    res.send(sneks)
}

exports.getSnek = async (req, res) => {
    const snek = await Snek.findById(req.params.id)
    res.send(snek)
}

exports.addSnek = async (req, res) => {
    let result = await Snek.create({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        weight: req.body.weight,
        discount: req.body.discount,
        productType: req.body.productType
    })
    res.send('good')
}