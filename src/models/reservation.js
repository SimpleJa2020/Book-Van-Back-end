module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define(
        'Reservation',
        {
            vanSeatNumber: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        }
    );
    Reservation.associate = db => {
        Reservation.hasOne(db.Payment, {
            foreignKey: {
                name: 'reservationId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });

        Reservation.belongsTo(db.Passenger, {
            foreignKey: {
                name: 'passengerId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });

        Reservation.belongsTo(db.Trip, {
            foreignKey: {
                name: 'tripId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };

    return Reservation;
};
