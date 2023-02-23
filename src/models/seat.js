module.exports = (sequelize, DataTypes) => {
    const status = ['available', 'occupied'];
    const Seat = sequelize.define(
        'Seat',
        {
            seatStatus: {
                type: DataTypes.ENUM(...status),
                allowNull: false,
                defaultValue: status[0]
            },
            seatNumber: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            underscored: true,
            timestamps: false
        }
    );
    Seat.associate = db => {
        Seat.hasMany(db.Trip, {
            foreignKey: {
                name: 'seatId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
        Seat.belongsTo(db.Van, {
            foreignKey: {
                name: 'vanId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Seat;
};
