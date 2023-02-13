const { Op } = require('sequelize');
const { Departure, Timetable, Seat } = require('../models');

exports.getAllBooking = async (req, res, next) => {
    try {
        const { origin, finalPlace, bookingDate } = req.body;
        console.log(origin, finalPlace, bookingDate);
        const timeList = await Departure.findAll({
            where: {
                startingTerminal: {
                    [Op.like]: `%${origin}%`
                },
                destination: {
                    [Op.like]: `%${finalPlace}%`
                }
            },
            include: {
                model: Timetable,
                where: {
                    date: `%${bookingDate}%`
                }
            }
        });
        res.status(200).json({ timeList });
    } catch (err) {
        next(err);
    }
};

exports.getAllSeat = async (req, res, next) => {
    try {
        const seats = await Seat.findAll({
            where: req.body
        });
        console.log(seats);
        res.status(200).json({ seats });
    } catch (err) {
        next(err);
    }
};
