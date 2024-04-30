const express = require('express')
const { addSushi, getSushies, getSushi } = require('../controllers/sushiController')
const parser = express.json()
const sushiRouter = express.Router()

sushiRouter.get('/', getSushies)
sushiRouter.get('/:id', getSushi)
sushiRouter.post('/', parser, addSushi)


module.exports = sushiRouter