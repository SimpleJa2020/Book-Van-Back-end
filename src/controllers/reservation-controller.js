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
        console.log('-------->', req.body);
        const reservation = await Reservation.create({
            vanSeatNumber: req.body.vanSeatNumber,
            passengerId: req.passenger.id,
            tripId: req.body.tripId
        });
        // ----------------------------------------------------------------------

        // const reservation = await Reservation.findOne({
        //     where: { id: reservation_xxx.id },
        //     include: [
        //         {
        //             model: Passenger,
        //             attributes: {
        //                 exclude: ['password', 'role']
        //             }
        //         },
        //         {
        //             model: Trip,

        //             include: [
        //                 {
        //                     model: Timetable
        //                 },
        //                 {
        //                     model: Van
        //                 },
        //                 {
        //                     model: Departure
        //                 }
        //             ]
        //         }
        //     ]
        // });
        // ----------------------------------------------------------------------

        res.status(201).json(reservation);
    } catch (err) {
        next(err);
    }
};

exports.getReservationById = async (req, res, next) => {
    console.log('------bean--------> ', req.params);
    try {
        const { reservationId } = req.params;
        const reservation = await Reservation.findAll({
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

                    include: [
                        {
                            model: Timetable
                        },
                        {
                            model: Van
                        },
                        {
                            model: Departure
                        }
                    ]
                }
            ]
        });
        res.status(200).json(reservation);
    } catch (err) {
        next(err);
    }
};

exports.cancelReservation = async (req, res, next) => {
    try {
        const { reservationId } = req.params;
        console.log('<-------------->', reservationId);

        const unreserve = await Reservation.destroy({
            where: { id: reservationId }
        });
        res.status(204).json({ unreserve });
    } catch (err) {
        next(err);
    }
};
