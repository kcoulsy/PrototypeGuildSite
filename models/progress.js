'use strict';
module.exports = (sequelize, DataTypes) => {
    const Progress = sequelize.define(
        'Progress',
        {
            name: DataTypes.STRING,
            done: DataTypes.INTEGER,
            of: DataTypes.INTEGER,
        },
        {
            timestamps: false,
        }
    );
    Progress.associate = function(models) {
        // associations can be defined here
    };
    return Progress;
};
