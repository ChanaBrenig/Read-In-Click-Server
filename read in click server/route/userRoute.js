const express = require('express')
const route = express.Router();
const userController = require('../controller/userController');

route.post('/signUp', userController.signUp)
//route.post('/createUser', userController.createUser);
//route.get('/signInById/:userId', userController.signInById);
route.get('/signInById/:userId/:password', userController.signInById)


module.exports = route;