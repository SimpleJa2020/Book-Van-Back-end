const {
    validateRegister,
    validateLogin
} = require('../validators/auth-validator');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Passenger } = require('../models');
const createError = require('../utils/create-error');

exports.register = async (req, res, next) => {
    try {
        const value = validateRegister(req.body);

        const passenger = await Passenger.findOne({
            where: {
                [Op.or]: [
                    { email: value.email || '' },
                    { mobile: value.mobile || '' }
                ]
            }
        });

        if (passenger) {
            createError('email or mobile is already in use', 400);
        }

        value.password = await bcrypt.hash(value.password, 12);
        await Passenger.create(value);

        res.status(201).json({
            message: 'register success. please log in to continue'
        });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const value = validateLogin(req.body);

        const passenger = await Passenger.findOne({
            where: {
                [Op.or]: [
                    { email: value.emailOrMobile },
                    { mobile: value.emailOrMobile }
                ]
            }
        });

        if (!passenger) {
            createError('invalid email or mobile or password', 400);
        }

        const isCorrect = await bcrypt.compare(
            value.password,
            passenger.password
        );
        if (!isCorrect) {
            createError('invalid email or mobile or password', 400);
        }

        const accessToken = jwt.sign(
            {
                id: passenger.id,
                firstName: passenger.firstName,
                lastName: passenger.lastName,
                gender: passenger.gender,
                email: passenger.email,
                mobile: passenger.mobile,
                role: passenger.role
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );
        res.status(200).json({ accessToken });
    } catch (err) {
        next(err);
    }
};

exports.getMe = async (req, res, next) => {
    try {
        const passengers = await Passenger.findOne({
            where: { id: req.passenger.id },
            attributes: ['id']
        });

        res.status(200).json({ passengers });
    } catch (err) {
        next(err);
    }
};
