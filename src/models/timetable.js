module.exports = (sequelize, Datatypes) => {
    const Timetable = sequelize.define(
        'Timetable',
        {
            date: {
                type: Datatypes.DATE,
                allowNull: false
            },
            time: {
                type: Datatypes.TIME,
                allowNull: false
            }
        },
        {
            underscore: true
        }
    );
    return Timetable;
};
