module.exports = (sequelize, Datatypes) => {
    const Departure = sequelize.define(
        'Departure',
        {
            startingTerminal: {
                type: Datatypes.STRING,
                allowNull: false
            },
            destination: {
                type: Datatypes.STRING,
                allowNull: false
            },
            price: {
                type: Datatypes.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            underscore: true
        }
    );

    Departure.associate = db => {
        Departure.hasMany(db.Van, {
            foreignKey: {
                name: 'departureId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
        Departure.hasMany(db.Timetable, {
            foreignKey: {
                name: 'departureId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Departure;
};
