// const { validateReservation } = require('../validators/reservation-validator');
const { Reservation } = require('../models');
exports.createReservation = async (req, res, next) => {
    try {
        console.log(req);
        const value = req.body;

        value.passengerId = req.passenger.id;
        await Reservation.create(value);
        res.status(201).json({ message: 'create reservation success' });
    } catch (err) {
        next(err);
    }
};
