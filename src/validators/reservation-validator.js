const Joi = require('joi');

const validate = require('./validate');

const reservationSchema = Joi.object({
    reservationDate: Joi.date().iso().required().greater('now'),
    vanSeatNumber: Joi.string().required()
});

exports.validateReservation = validate(reservationSchema);
