module.exports = (sequelize, DataTypes) => {
    const Timetable = sequelize.define(
        'Timetable',
        {
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            time: {
                type: DataTypes.TIME,
                allowNull: false
            }
        },
        {
            underscored: true
        }
    );

    Timetable.associate = db => {
        Timetable.hasMany(db.Trip, {
            foreignKey: {
                name: 'timetableId',
                allowNull: false
            },
            onDelete: 'CASCADE'
        });
    };
    return Timetable;
};
