const express = require('express')
const { addDrink, getDrinks, getDrink } = require("../controllers/drinksController")
const parser = express.json()
const drinksRouter = express.Router()

drinksRouter.get('/', getDrinks)
drinksRouter.get('/:id', getDrink)
drinksRouter.post('/', parser, addDrink)


module.exports = drinksRouter