const express = require('express')
const { addSnek, getSneks, getSnek } = require("../controllers/snekController")
const parser = express.json()
const snekRouter = express.Router()

snekRouter.get('/', getSneks)
snekRouter.get('/:id', getSnek)
snekRouter.post('/', parser, addSnek)


module.exports = snekRouter