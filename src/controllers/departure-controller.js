const { Op } = require('sequelize');
const { Departure, Timetable } = require('../models');

exports.getAllDeparture = async (req, res, next) => {
    try {
        const departure = await Departure.findAll({
            include: [
                {
                    model: Timetable
                }
            ]
        });
        console.log(departure);
        res.status(200).json({ departure });
    } catch (err) {
        next(err);
    }
};

// exports.getAllDeparture = async (req, res, next) => {
//     try {
//         const departure = await Departure.findAll({
//             // where: {req.body}
//         });
//         console.log(departure);
//         res.status(200).json({ departure });
//     } catch (err) {
//         next(err);
//     }
// };
