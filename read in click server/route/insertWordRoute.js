const express = require('express')
const route = express.Router()
const insWordController = require('../controller/wordController')

route.post('/insertKamatz', insWordController.insertKamatz)
route.post('/insertChirik', insWordController.insertChirik)
route.post('/insertCholam', insWordController.insertCholam)
route.post('/insertShuruk', insWordController.insertShuruk)
route.post('/insertSegol', insWordController.insertSegol)
// route.post('/insertKamatz', insWordController.insertKamatz)

module.exports = route