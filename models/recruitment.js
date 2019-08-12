'use strict';
module.exports = (sequelize, DataTypes) => {
    const Recruitment = sequelize.define(
        'Recruitment',
        {
            name: DataTypes.STRING,
            enabled: DataTypes.BOOLEAN,
        },
        {
            timestamps: false,
        }
    );
    Recruitment.associate = function(models) {
        // associations can be defined here
    };
    return Recruitment;
};
