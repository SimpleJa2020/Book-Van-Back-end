module.exports = (sequelize, Datatypes) => {
    const Reservation = sequelize.define(
        'Reservation',
        {
            reservationDate: {
                type: Datatypes.DATE,
                allowNull: false
            },
            vanSeatNumber: {
                type: Datatypes.INTEGER,
                allowNull: false
            },
            isPaid: {
                type: Datatypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            underscore: true
        }
    );
    Reservation.associate = db => {
        Reservation.belongsTo(db.Passenger, {
            foreignKey: {
                name: 'passengerId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });

        Reservation.belongsTo(db.Payment, {
            foreignKey: {
                name: 'paymentId',
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
