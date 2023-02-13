module.exports = (sequelize, DataTypes) => {
    const gender = ['male', 'female'];
    const role = ['user', 'admin'];
    const Passenger = sequelize.define(
        'Passenger',
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            gender: {
                type: DataTypes.ENUM(...gender),
                allowNull: false,
                defaultValue: gender[0]
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            mobile: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    is: /^[0-9]{10}$/
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            role: {
                type: DataTypes.ENUM(...role),
                allowNull: true
            }
        },
        {
            underscored: true,
            timestamps: false
        }
    );

    Passenger.associate = db => {
        Passenger.hasMany(db.Reservation, {
            foreignKey: {
                name: 'passengerId',
                allowNull: false
            },
            onDelete: 'RESTRICT'
        });
    };

    return Passenger;
};
