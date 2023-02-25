module.exports = (sequelize, DataTypes) => {
    const status = ['available', 'occupied'];
    const Trip = sequelize.define(
        'Trip',
        {
            seatStatus: {
                type: DataTypes.ENUM(...status),
                allowNull: false,
                defaultValue: status[0]
            }
        },
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

        Trip.hasMany(db.Van, {
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
    };
    return Trip;
};
