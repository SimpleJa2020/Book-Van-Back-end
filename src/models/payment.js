module.exports = (sequelize, Datatypes) => {
    const Payment = sequelize.define(
        'Payment',
        {
            paymentDate: {
                type: Datatypes.DATE,
                allowNull: false
            }
        },
        {
            underscore: true
        }
    );
    return Payment;
};
