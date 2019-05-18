const Squad = require("../models/Squad");

const squadController = {
  // INDEX
  index: function (req, res) {
    Squad.find().then(Sqd => {
      res.send(Sqd)
    });
  },
  
  // SHOW
  show: function (req, res) {
    Squad.findById(req.params.id).then(Sqd => {
      res.send(Sqd);
    });
  },

  // CREATE
  create: function (req, res) {
    Squad.create(req.body).then(() => res.send(200));
  },

  //UPDATE
  update: function (req, res) {
     Squad.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
        res.send(200);
      });
  },

  // DELETE
  delete: function (req, res) {
    Squad.findByIdAndRemove(req.params.id).then(() => {
      res.send(200);
    });
  }

};

// EXPORTS
module.exports = squadController;