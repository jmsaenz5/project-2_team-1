var db = require("../models");

module.exports = function(app) {
  app.get("/api/Reviewer/all", function(req, res) {
    db.Reviewer.findAll({
      where: {
        Reviewer: req.params.Reviewer
<<<<<<< HEAD
      }
      include: [db.purchaseRequest, db.purchaseOrder]
=======
      },
      include: [db.purchaseRequest]
>>>>>>> 2b522e6fecd7694de35660408eced05a1b049fa4
    }).then(function(dbReviewer) {
      res.json(dbReviewer);
    });
  });

  app.get("/api/Reviewer/:purchaseRequest", function(req, res) {
    db.Reviewer.findOne({
      where: {
        purchaseRequest: req.params.purchaseRequest
      },
      include: [db.Reviewer]
    }).then(function(dbReviewer) {
      res.json(dbReviewer);
    });
  });

  app.get("/api/Reviewer/:purchaseOrder", function(req, res) {
    db.Reviewer.findOne({
      where: {
        purchaseOrder: req.params.purchaseOrder
      },
      include: [db.Reviewer]
    }).then(function(dbReviewer) {
      res.json(dbReviewer);
    });
  });
};