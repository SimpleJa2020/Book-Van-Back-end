module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define(
        'Payment',
        {
            paymentDate: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            isPaid: {
                type: DataTypes.BOOLEAN,
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
