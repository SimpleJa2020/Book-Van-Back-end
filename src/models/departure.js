module.exports = (sequelize, Datatypes) => {
    const Departure = sequelize.define(
        'Departure',
        {
            startingTerminal: {
                type: Datatypes.STRING,
                allowNull: false
            },
            destination: {
                type: Datatypes.STRING,
                allowNull: false
            },
            price: {
                type: Datatypes.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            underscore: true
        }
    );
    return Departure;
};
