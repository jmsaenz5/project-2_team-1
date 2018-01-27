var db = require("../models");

module.exports = function(app) {
  // GET all of the users
  app.get("/api/Users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST to save new user
  app.post("/api/Users", function(req, res) {
    console.log(req.body);
    db.User.create({
      Last_Name: req.body.Last_Name,
      First_Name: req.body.First_Name,
      Email: req.body.Email,
      Staff_ID: req.body.Staff_ID,
      Security_Role: req.body.Security_Role,
      Login_Name: req.body.Login_Name,
      Active_Status: req.body.Active_Status
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
}
