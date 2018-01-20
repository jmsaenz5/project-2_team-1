var Sequelize = require("sequelize");

var sequelize = new Sequelize("project2", "root", "^yours001" {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
