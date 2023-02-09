module.exports = (sequelize, Datatypes) => {
    const Van = sequelize.define(
        'Van',
        {
            vanNumber: {
                type: Datatypes.STRING,
                allowNull: false
            },
            vanStatus: {
                type: Datatypes.BOOLEAN,
                defaultValue: true
            },
            vanSeat: {
                type: Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            underscored: true,
            timestamps: false
        }
    );

    Van.associate = db => {
        Van.hasMany(db.Reservation, {
            foreignKey: {
                name: 'vanId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
        Van.belongsTo(db.Departure, {
            foreignKey: {
                name: 'departureId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Van;
};
