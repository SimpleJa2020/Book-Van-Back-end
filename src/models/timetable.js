module.exports = (sequelize, Datatypes) => {
    const Timetable = sequelize.define(
        'Timetable',
        {
            date: {
                type: Datatypes.DATE,
                allowNull: false
            },
            time: {
                type: Datatypes.TIME,
                allowNull: false
            }
        },
        {
            underscore: true
        }
    );

    Timetable.associate = db => {
        Timetable.belongsTo(db.Departure, {
            foreignKey: {
                name: 'departureId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });

        Timetable.hasMany(db.Reservation, {
            foreignKey: {
                name: 'timetableId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Timetable;
};
