'use strict';
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define(
        'Event',
        {
            name: DataTypes.STRING,
            date: DataTypes.DATE,
            schemaId: DataTypes.INTEGER,
        },
        {}
    );
    Event.associate = function(models) {
        Event.belongsTo(models.Schema);
        Event.hasMany(models.Attendance);
    };
    return Event;
};
