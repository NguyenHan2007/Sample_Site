'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cake = sequelize.define('Cake', {
    name: DataTypes.STRING,
    imagepath: DataTypes.TEXT,
    origin: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Cake.associate = function(models) {
    // associations can be defined here
  };
  return Cake;
};