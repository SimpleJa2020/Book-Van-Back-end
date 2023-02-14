const { Trip, Van, Departure, Timetable } = require('../models');

exports.createTrip = async (req, res, next) => {
    try {
        await Trip.create({ vanId: 3, departureId: 1, timetableId: 2 });
        res.status(201).json({ message: 'create success' });
    } catch (err) {
        next(err);
    }
};

exports.getAllTrip = async (req, res, next) => {
    try {
        const { origin, finalPlace, bookingDate } = req.query;
        console.log({ origin, finalPlace, bookingDate });
        if (!origin || !finalPlace || !bookingDate) {
            console.log('test1');
            const trips = await Trip.findAll({
                include: [
                    {
                        model: Departure
                    },
                    {
                        model: Timetable
                    }
                ]
            });
            return res.json({ trips });
        }

        console.log({ origin, finalPlace, bookingDate });
        const trips = await Trip.findAll({
            include: [
                {
                    model: Departure,
                    where: {
                        startingTerminal: origin,
                        destination: finalPlace
                    }
                },
                {
                    model: Timetable,
                    where: {
                        date: new Date(bookingDate)
                    }
                }
            ]
        });
        res.status(200).json({ trips });
    } catch (err) {
        next(err);
    }
};

exports.changeTrip = async (req, res, next) => {
    try {
        await Trip.update(
            { vanId: 2, departureId: 2 },
            { where: { id: req.params.tripId } }
        );
        res.status(200).json({ message: 'update success' });
    } catch (err) {
        next(err);
    }
};

exports.cancelTrip = async (req, res, next) => {
    try {
        console.log(req.params.tripId);
        const trip = await Trip.findOne({
            where: { id: req.params.tripId }
        });
        await trip.destroy();
        res.status(204).json({ trip });
    } catch (err) {
        next(err);
    }
};