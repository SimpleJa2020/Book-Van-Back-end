// const { validateReservation } = require('../validators/reservation-validator');
const {
    Reservation,
    Trip,
    Passenger,
    Timetable,
    Departure,
    Van
} = require('../models');
exports.createReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.create({});

        res.status(201).json({ message: 'create reservation success' });
    } catch (err) {
        next(err);
    }
};

exports.getAllReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findAll({
            include: [
                {
                    model: Passenger,
                    attributes: {
                        exclude: ['password', 'role']
                    }
                },
                {
                    model: Trip,

                    include: {
                        model: Departure,
                        Van,
                        Timetable
                    }
                }
            ]
        });
        res.status(200).json({ reservation });
    } catch (err) {
        next(err);
    }
};
