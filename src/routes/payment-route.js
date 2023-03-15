const express = require('express');
const paymentController = require('../controllers/payment-controller');
const router = express.Router();

router.post('/', paymentController.createPayment);
router.patch('/', paymentController.updatePayment);
router.get('/getAllPayment', paymentController.getPayment);

module.exports = router;
