module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define(
        'Reservation',
        {
            vanSeatNumber: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            underscored: true,
            timestamps: false
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
