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

    Payment.associate = db => {
        Payment.belongsTo(db.Passenger, {
            foreignKey: {
                name: 'passengerId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });

        Payment.hasMany(db.Reservation, {
            foreignKey: {
                name: 'paymentId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Payment;
};
