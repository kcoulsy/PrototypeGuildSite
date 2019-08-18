'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schema = sequelize.define('Schema', {
    name: DataTypes.STRING,
    schema: DataTypes.TEXT,
    enabled: DataTypes.BOOLEAN
  }, {});
  Schema.associate = function(models) {
    // associations can be defined here
  };
  return Schema;
};