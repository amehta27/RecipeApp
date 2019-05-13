'use strict';
module.exports = (sequelize, DataTypes) => {
  const Receipe = sequelize.define('Receipe', {
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    mediaurl: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    amountoftime: DataTypes.INTEGER
  }, {});
  Receipe.associate = function(models) {
    // associations can be defined here
  };
  return Receipe;
};