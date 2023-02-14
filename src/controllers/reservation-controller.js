// const { validateReservation } = require('../validators/reservation-validator');
const {
    Reservation,
    Trip,
    Passenger,
    Timetable,
    Departure,
    Van
} = require('../models');
const { route } = require('../routes/auth-route');
exports.createReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.create({
            vanSeatNumber: req.body.vanSeatNumber,
            passengerId: req.passenger.id,
            tripId: req.body.tripId
        });

        res.status(201).json({ reservation });
    } catch (err) {
        next(err);
    }
};

exports.getAllReservation = async (req, res, next) => {
    console.log(req.params);
    try {
        const reservationId = req.params.reservationId;
        const reservation = await Reservation.findOne({
            where: { id: reservationId },
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
