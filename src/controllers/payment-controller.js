const { Payment, Reservation } = require('../models');

exports.createPayment = async (req, res, next) => {
    try {
        let currentDate = new Date().toJSON();
        await Payment.create({
            paymentDate: currentDate,
            reservationId: req.body.reservationId,
            isPaid: req.body.isPaid
        });
        res.status(201).json({ message: 'create success' });
    } catch (err) {
        next(err);
    }
};

exports.getPayment = async (req, res, next) => {
    try {
        const payments = await Payment.findAll({
            include: [
                {
                    model: Reservation
                }
            ]
            // where: {
            //     reservationId: req.body.reservationId
            // }
        });
        res.status(200).json({ payments });
    } catch (err) {
        next(err);
    }
};
