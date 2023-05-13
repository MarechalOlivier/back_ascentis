const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController')
const authController = require('../controllers/authController')

router
    .route('/')
    .get(ticketController.findAllTickets)
    .post(authController.protect, ticketController.createTicket)
    

router
    .route('/withReview')
    .get(ticketController.findAllTicketsByReviewSQL)

router
    .route('/:id')
    .get(ticketController.findTicketByPk)
    .put(authController.protect, ticketController.updateTicket)
    .delete(authController.protect, authController.restrictTo('user', 'admin'), ticketController.deleteTicket)

module.exports = router; 