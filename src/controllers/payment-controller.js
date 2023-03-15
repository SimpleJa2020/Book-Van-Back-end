const { Payment, Reservation } = require('../models');

exports.createPayment = async (req, res, next) => {
    try {
        console.log('uuuuuuu', req.body);
        await Payment.create({
            paymentDate: req.body.createdAt,
            reservationId: req.body.reservationId,
            isPaid: false
        });
        res.status(201).json({ message: 'create success' });
    } catch (err) {
        next(err);
    }
};

exports.updatePayment = async (req, res, next) => {
    try {
        const [paymentUpdate] = await Payment.update(
            { isPaid: true },
            {
                where: {
                    reservationId: req.body.reservationId
                }
            }
        );
        res.status(200).json({ message: 'success update' });
    } catch (err) {
        next(err);
    }
};

exports.getPayment = async (req, res, next) => {
    try {
        const payments = await Payment.findAll({
            where: {
                isPaid: true
            }
        });
        res.status(200).json(payments);
    } catch (err) {
        next(err);
    }
};
