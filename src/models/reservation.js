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
            onDelete: 'CASCADE'
        });

        Reservation.belongsTo(db.Passenger, {
            foreignKey: {
                name: 'passengerId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });

        Reservation.belongsTo(db.Trip, {
            foreignKey: {
                name: 'tripId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });
    };

    return Reservation;
};
