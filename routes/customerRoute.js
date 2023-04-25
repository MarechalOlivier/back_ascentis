const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')  //
const authController = require('../controllers/authController') 

router
    .route('/')
    .get(customerController.findAllUsers)

router
    .route('/login')
    .post(authController.login)

router
    .route('/signup')
    .post(authController.signup)

module.exports = router;