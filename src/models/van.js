module.exports = (sequelize, DataTypes) => {
    const Van = sequelize.define(
        'Van',
        {
            vanNumber: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            vanStatus: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
            vanSeat: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            underscored: true,
            timestamps: false
        }
    );

    Van.associate = db => {
        Van.hasMany(db.Trip, {
            foreignKey: {
                name: 'vanId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Van;
};
