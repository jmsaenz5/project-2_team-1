const express = require("express");
const app = express();
const login = require("../models");

app.get("/", function(req, res) {
  login.all(function(data) {
    res.render("login");
  });
});
