const { Passenger, Timetable } = require('../models');
exports.createByAdmin = async (req, res, next) => {
    try {
        // if (req.Passenger.role) {
        // }
        console.log('-------', req.body);
        const timetable = await Timetable.create({
            date: req.body.date,
            time: req.body.time
        });

        res.status(201).json({ message: 'create success', timetable });
    } catch (err) {
        next(err);
    }
};
