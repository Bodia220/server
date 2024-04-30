const express = require('express')
const { addSalat, getSalat, getSalats } = require('../controllers/salatController')
const parser = express.json()
const salatRouter = express.Router()

salatRouter.get('/', getSalats)
salatRouter.get('/:id', getSalat)
salatRouter.post('/', parser, addSalat)


module.exports = salatRouter