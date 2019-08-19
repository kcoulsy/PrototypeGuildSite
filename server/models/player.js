'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    rank: DataTypes.STRING,
    rankIndex: DataTypes.STRING,
    class: DataTypes.STRING,
    level: DataTypes.INTEGER,
    officerNote: DataTypes.STRING,
    note: DataTypes.STRING
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};