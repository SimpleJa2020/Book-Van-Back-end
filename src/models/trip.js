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
            underscored: true
        }
    );
    Trip.associate = db => {
        Trip.hasMany(db.Reservation, {
            foreignKey: {
                name: 'tripId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });

        Trip.hasMany(db.Van, {
            foreignKey: {
                name: 'tripId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });

        Trip.belongsTo(db.Timetable, {
            foreignKey: {
                name: 'timetableId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });
        Trip.belongsTo(db.Departure, {
            foreignKey: {
                name: 'departureId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });
    };
    return Trip;
};
