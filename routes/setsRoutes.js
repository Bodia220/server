const express = require('express')
const { addSet, getSets, getSet } = require('../controllers/setsControlles')
const parser = express.json()
const setsRouter = express.Router()

setsRouter.get('/', getSets)
setsRouter.get('/:id', getSet)
setsRouter.post('/', parser, addSet)


module.exports = setsRouter