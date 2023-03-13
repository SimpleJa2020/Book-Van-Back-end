module.exports = (sequelize, DataTypes) => {
    const Departure = sequelize.define(
        'Departure',
        {
            startingTerminal: {
                type: DataTypes.STRING,
                allowNull: false
            },
            destination: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            underscored: true
        }
    );

    Departure.associate = db => {
        Departure.hasMany(db.Trip, {
            foreignKey: {
                name: 'departureId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Departure;
};
