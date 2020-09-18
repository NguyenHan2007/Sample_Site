'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tea = sequelize.define('Tea', {
    name: DataTypes.STRING,
    imagepath: DataTypes.TEXT,
    origin: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Tea.associate = function(models) {
    // associations can be defined here
  };
  return Tea;
};