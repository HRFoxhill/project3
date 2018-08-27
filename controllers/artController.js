const db = require("../models");

// Defining methods for the artController
module.exports = {
  findAll: function (req, res) {
    db.Art
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Art
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Art
      .create(req.body)
      .then(dbArt => {
        return db.Artist.findOneAndUpdate({ _id: req.params.id }, { $push: { art: dbArt._id } }, { new: true })
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Art
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.send(err)
      });
  },
  remove: function (req, res) {
    db.Art
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.send(err)
      });
  },
  findByMedium: function (req, res) {
    let medium = req.params.medium;
    db.Art
      .find({ medium: medium })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
  
};