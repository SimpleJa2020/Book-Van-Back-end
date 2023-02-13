module.exports = (sequelize, DataTypes) => {
    const Trip = sequelize.define(
        'Trip',
        {},
        {
            underscored: true,
            timestamps: false
        }
    );
    Trip.associate = db => {
        Trip.hasMany(db.Reservation, {
            foreignKey: {
                name: 'tripId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });

        Trip.belongsTo(db.Timetable, {
            foreignKey: {
                name: 'timetableId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
        Trip.belongsTo(db.Departure, {
            foreignKey: {
                name: 'departureId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
        Trip.belongsTo(db.Van, {
            foreignKey: {
                name: 'vanId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Trip;
};
