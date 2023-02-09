const jwt = require('jsonwebtoken');
const createError = require('../utils/create-error');
const { Passenger } = require('../models');

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization || !authorization.startsWith('Bearer ')) {
            createError('you are unauthorize1', 401);
        }
        const token = authorization.split(' ')[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const passenger = await Passenger.findOne({
            where: { id: payload.id }
        });
        if (!passenger) {
            createError('you are unauthorize2', 401);
        }
        req.passenger = passenger;
        next();
    } catch (err) {
        next(err);
    }
};
