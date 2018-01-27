const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const Purchase_Request = sequelize.define("Purchase_Request", {
    PR_Number: { DataTypes.INTEGER, autoincrement: true },
    Item_Description: DataTypes.STRING,
    Date_Needed: DataTypes.DATE,
    Qty: DataTypes.INTEGER,
    Unit: DataTypes.STRING,
    Vendor: DataTypes.STRING,
    Est_Price: DataTypes.DOUBLE,
    Tax_Rate: DataTypes.DOUBLE,
    Est_Shipping: DataTypes.DOUBLE,
    Justification: DataTypes.STRING,
    Comments: DataTypes.STRING,
    PR_Status: DataTypes.STRING,
    Date_Completed: DataTypes.DATE,
    Created_By: DataTypes.STRING
  });

  return Purchase_Request;

};
