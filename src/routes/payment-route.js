const express = require('express');
const paymentController = require('../controllers/payment-controller');
const router = express.Router();

router.post('/', paymentController.createPayment);
router.get('/', paymentController.getPayment);

module.exports = router;
