const Salat = require('../models/salat')


exports.getSalats = async (req, res) => {
    const salats = await Salat.find({})
    res.send(salats)
}

exports.getSalat = async (req, res) => {
    const salat = await Salat.findById(req.params.id)
    res.send(salat)
}

exports.addSalat = async (req, res) => {
    let result = await Salat.create({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        desription: req.body.desription,
        weight: req.body.weight
    })
    res.send('good')
}