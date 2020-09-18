'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cream = sequelize.define('Cream', {
    name: DataTypes.STRING,
    imagepath: DataTypes.TEXT,
    origin: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Cream.associate = function(models) {
    // associations can be defined here
  };
  return Cream;
};