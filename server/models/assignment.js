'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define('Assignment', {
    eventId: DataTypes.INTEGER,
    sectionIndex: DataTypes.INTEGER,
    typeIndex: DataTypes.INTEGER,
    assignmentIndex: DataTypes.INTEGER,
    assignment: DataTypes.STRING
  }, {});
  Assignment.associate = function(models) {
    // associations can be defined here
  };
  return Assignment;
};