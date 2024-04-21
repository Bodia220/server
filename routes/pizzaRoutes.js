const express = require('express')
const { addPizza, getPizzas, getPizza } = require('../controllers/pizzaController')
const parser = express.json()
const pizzaRouter = express.Router()

pizzaRouter.get('/', getPizzas)
pizzaRouter.get('/:id', getPizza)
pizzaRouter.post('/', parser, addPizza)


module.exports = pizzaRouter