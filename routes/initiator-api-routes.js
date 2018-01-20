var db = require("../models");

module.exports = function(app) {
  app.get("/api/Initiator/all", function(req, res) {
    db.Initiator.findAll({
      where: {
        Initiator: req.params.Initiator
      }
      include: [db.purchaseRequest, db.purchaseOrder]
    }).then(function(dbInitiaor) {
      res.json(dbInitiaor);
    });
  });

  app.get("/api/Initiator/:purchaseRequest", function(req, res) {
    db.Initiator.findOne({
      where: {
        purchaseRequest: req.params.purchaseRequest
      },
      include: [db.Initiator]
    }).then(function(dbInitiaor) {
      res.json(dbInitiaor);
    });
  });

  app.get("/api/Initiator/:purchaseOrder", function(req, res) {
    db.Initiator.findOne({
      where: {
        purchaseOrder: req.params.purchaseOrder
      },
      include: [db.Initiator]
    }).then(function(dbInitiaor) {
      res.json(dbInitiaor);
    });
  });
};
