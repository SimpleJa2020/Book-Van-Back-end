const express = require('express');
const reservationController = require('../controllers/reservation-controller');
const router = express.Router();

router.post('/', reservationController.createReservation);
router.get('/ ', reservationController.getAllReservation);

module.exports = router;
