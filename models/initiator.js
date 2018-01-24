const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");


module.exports = function(sequelize, DataTypes) {
  const Initiator = sequelize.define("Initiator", {
    name: DataTypes.STRING
  });

  Initiator.associate = function(models) {
    Initiator.hasMany(models.purchaseRequest, {});
  };

  return Initiator;

  Initiator.sync();
};
