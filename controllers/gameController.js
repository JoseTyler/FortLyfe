const Gameplay = require("../models/Gameplay");


const gameController = {
  // INDEX
  index: function (req, res) {
    Gameplay.find().then(Gme => {
      res.send(Gme)
    });
  },

  // SHOW
  show: function (req, res) {
    Gameplay.findById(req.params.id).then(Gme => {
      res.send(Gme);
    });
  },

  // CREATE
  create: function (req, res) {
    Gameplay.create(req.body).then(() => res.send(200));
  },

  //UPDATE
  update: function (req, res) {
    Gameplay.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
      res.send(200);
    });
  },

  // DELETE
  delete: function (req, res) {
    Gameplay.findByIdAndRemove(req.params.id).then(() => {
      res.send(200);
    });
  }
};

// EXPORTS
module.exports = gameController;