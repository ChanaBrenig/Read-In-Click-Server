const express = require('express')
var wordRoute = express.Router();

const wordController = require('../controller/getWordController')

wordRoute.get('/:kind', wordController.getWords)

module.exports = wordRoute