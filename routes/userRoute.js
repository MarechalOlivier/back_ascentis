const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')  //
const authController = require('../controllers/authController') 

router
    .route('/')
    .get(userController.findAllUser)
    .post(userController.createUser)

router
    .route('/login')
    .post(authController.login)

router
    .route('/signup')
    .post(authController.signup)

module.exports = router;