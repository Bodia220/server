const Set = require('../models/sets')


exports.getSets = async (req, res) => {
    const sets = await Set.find({})
    res.send(sets)
}

exports.getSet = async (req, res) => {
    const set = await Set.findById(req.params.id)
    res.send(set)
}

exports.addSet = async (req, res) => {
    let result = await Set.create({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        desription: req.body.desription,
        weight: req.body.weight
    })
    res.send('good')
}