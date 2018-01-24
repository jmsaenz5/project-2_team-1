var db = require("../models");

module.exports = function(app) {
  app.get("/api/Reviewer/all", function(req, res) {
    db.Reviewer.findAll({
      where: {
        Reviewer: req.params.Reviewer
      },
      include: [db.purchaseRequest, db.purchaseOrder]
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
