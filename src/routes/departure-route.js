const express = require('express');
const departureController = require('../controllers/departure-controller');
const router = express.Router();

router.get('/', departureController.getAllDeparture);
router.get('/:departure', departureController.getDestination);

module.exports = router;
