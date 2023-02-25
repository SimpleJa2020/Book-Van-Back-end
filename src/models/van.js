module.exports = (sequelize, DataTypes) => {
    const Van = sequelize.define(
        'Van',
        {},
        {
            underscored: true,
            timestamps: false
        }
    );

    Van.associate = db => {
        Van.belongsTo(db.Trip, {
            foreignKey: {
                name: 'tripId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Van;
};
