const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllArtist: function (req, res) {
    db.Artist
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findArtistById: function (req, res) {
    db.Artist
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createArtist: function (req, res) {
    db.Artist
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateArtist: function (req, res) {
    db.Artist
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeArtist: function (req, res) {
    db.Artist
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getShowsByArtist: function (req, res) {
    db.Artist
      .findById({ _id: req.params.id })
      .populate("shows")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  getArtByArtist: function (req, res) {
    db.Artist
      .findById({ _id: req.parms.id })
      .populate("art")
      .then(dbModel => res.json(dbModel))
      .catch(err =>  res.status(422).json(err))
  }
};
