'use strict';
module.exports = (sequelize, DataTypes) => {
    const Attendance = sequelize.define(
        'Attendance',
        {
            playerId: DataTypes.INTEGER,
            role: DataTypes.STRING,
            late: DataTypes.BOOLEAN,
            eventId: DataTypes.INTEGER,
        },
        {}
    );
    Attendance.associate = function(models) {
        // associations can be defined here
        Attendance.belongsTo(models.Player);
    };
    return Attendance;
};
