const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    Last_Name: DataTypes.STRING,
    First_Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Staff_ID: DataTypes.INTEGER,
    Security_Role: DataTypes.STRING,
    Login_Name: DataTypes.STRING,
    Active_Status: { DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
  });

  return User;
};
