module.exports = (sequelize, Datatypes) => {
    const gender = ['male', 'female'];
    const Passenger = sequelize.define(
        'Passenger',
        {
            firstName: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            lastName: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            gender: {
                type: Datatypes.ENUM(...gender),
                allowNull: false,
                defaultValue: gender[0]
            },
            email: {
                type: Datatypes.STRING,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            mobile: {
                type: Datatypes.STRING,
                unique: true,
                validate: {
                    is: /^[0-9]{10}$/
                }
            },
            password: {
                type: Datatypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        }
    );

    return Passenger;
};
