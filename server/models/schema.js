'use strict';
module.exports = (sequelize, DataTypes) => {
    const Schema = sequelize.define(
        'Schema',
        {
            name: DataTypes.STRING,
            schema: DataTypes.TEXT,
            enabled: DataTypes.BOOLEAN,
        },
        {}
    );
    Schema.associate = function(models) {
        Schema.hasMany(models.Event);
    };
    return Schema;
};
