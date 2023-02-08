const { Departure } = require('../models');

exports.getAllDeparture = async (req, res, next) => {
    try {
        const departure = await Departure.findAll();
        console.log(departure);
        res.status(200).json({ departure });
    } catch (err) {
        next(err);
    }
};
