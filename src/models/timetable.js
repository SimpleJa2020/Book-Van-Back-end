module.exports = (sequelize, Datatypes) => {
    const Timetable = sequelize.define(
        'Timetable',
        {
            date: {
                type: Datatypes.DATEONLY,
                allowNull: false
            },
            time: {
                type: Datatypes.TIME,
                allowNull: false
            }
        },
        {
            underscored: true,
            timestamps: false
        }
    );

    Timetable.associate = db => {
        Timetable.hasMany(db.Reservation, {
            foreignKey: {
                name: 'timetableId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
        Timetable.belongsTo(db.Departure, {
            foreignKey: {
                name: 'departureId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Timetable;
};
