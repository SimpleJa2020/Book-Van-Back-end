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
    return Reservation;
};
