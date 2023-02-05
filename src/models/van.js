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
            underscore: true
        }
    );
    return Van;
};
