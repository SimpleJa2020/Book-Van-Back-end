const express = require('express');
const reservationController = require('../controllers/reservation-controller');
const router = express.Router();

router.post('/', reservationController.createReservation);
router.get('/:reservationId', reservationController.getReservationById);
router.delete('/:reservationId', reservationController.cancelReservation);

module.exports = router;
