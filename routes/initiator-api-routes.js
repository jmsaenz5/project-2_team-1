var db = require("../models");

module.exports = function(app) {
  app.get("/api/Initiator/all", function(req, res) {
    db.Initiator.findAll({
      where: {
        Initiator: req.params.Initiator
<<<<<<< HEAD
      }
      include: [db.purchaseRequest, db.purchaseOrder]
=======
      },
      include: [db.purchaseRequest]
>>>>>>> 2b522e6fecd7694de35660408eced05a1b049fa4
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