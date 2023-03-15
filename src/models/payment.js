module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define(
        'Payment',
        {
            isPaid: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            underscored: true
        }
    );

    Payment.associate = db => {
        Payment.belongsTo(db.Reservation, {
            foreignKey: {
                name: 'reservationId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });
    };
    return Payment;
};
