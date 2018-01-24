const Sequelize = require("sequelize");

const sequelize = new Sequelize("project2", "root", "^yours001", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = {
  sequelize
}
