module.exports = (sequelize, Datatypes) => {
    const Reservation = sequelize.define(
        'Reservation',
        {
            reservationDate: {
                type: Datatypes.DATEONLY,
                allowNull: false
            },
            vanSeatNumber: {
                type: Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            underscored: true,
            timestamps: false
        }
    );
    Reservation.associate = db => {
        Reservation.hasMany(db.Payment, {
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

        Reservation.belongsTo(db.Van, {
            foreignKey: {
                name: 'vanId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
        Reservation.belongsTo(db.Timetable, {
            foreignKey: {
                name: 'timetableId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };

    return Reservation;
};
