const express = require('express');
const tripController = require('../controllers/trip-controller');
const router = express.Router();

router.post('/', tripController.createTrip);
router.get('/', tripController.getAllTrip);
router.put('/:tripId', tripController.changeTrip);
router.delete('/:tripId', tripController.cancelTrip);

module.exports = router;
