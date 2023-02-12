// const { validateReservation } = require('../validators/reservation-validator');
const {
    Reservation,
    Departure,
    Timetable,
    Van,
    Passenger
} = require('../models');
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

exports.getAllReservation = async (req, res, next) => {
    try {
        const Reservations = await Reservation.findAll({
            include: [
                {
                    model: Passenger,
                    attributes: {
                        exclude: ['password', 'role']
                    }
                },
                {
                    model: Timetable,
                    attributes: {
                        exclude: ['departureId']
                    },
                    include: {
                        model: Departure
                    }
                },
                {
                    model: Van
                }
            ]
        });
        res.status(200).json({ Reservations });
    } catch (err) {
        next(err);
    }
};
