const express = require("express");
const router = express.Router();
const login = require("../models/login.js");

router.get("/", function(req, res) {
  login.all(function(data) {
    res.render("login");
  });
});
