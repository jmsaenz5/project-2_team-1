const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");


module.exports = function(sequelize, DataTypes) {
  const login = sequelize.define("login", {

  });

  return login;

  login.sync();
};
