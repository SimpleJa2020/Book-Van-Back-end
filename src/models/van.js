module.exports = (sequelize, DataTypes) => {
    const Van = sequelize.define(
        'Van',
        {},
        {
            underscored: true
        }
    );

    Van.associate = db => {
        Van.belongsTo(db.Trip, {
            foreignKey: {
                name: 'tripId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });
    };
    return Van;
};
