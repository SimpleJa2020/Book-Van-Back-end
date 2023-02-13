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
            underscored: true,
            timestamps: false
        }
    );

    Timetable.associate = db => {
        Timetable.hasMany(db.Trip, {
            foreignKey: {
                name: 'timetableId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };
    return Timetable;
};
