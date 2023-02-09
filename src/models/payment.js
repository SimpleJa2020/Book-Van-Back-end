module.exports = (sequelize, Datatypes) => {
    const Payment = sequelize.define(
        'Payment',
        {
            paymentDate: {
                type: Datatypes.DATEONLY,
                allowNull: false
            },
            isPaid: {
                type: Datatypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            underscored: true,
            timestamps: false
        }
    );

    Payment.associate = db => {
        Payment.belongsTo(db.Reservation, {
            foreignKey: {
                name: 'reservationId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Payment;
};
