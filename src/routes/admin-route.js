const express = require('express');

const adminController = require('../controllers/admin-controller');

const router = express.Router();

router.post('/createTimetable', adminController.createByAdmin);

module.exports = router;
