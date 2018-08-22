const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Defining methods for the artistsController
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
      .then(dbArtist => {
        let hash = bcrypt.hashSync(dbArtist.password, saltRounds)
        return db.Artist.findOneAndUpdate({ _id: dbArtist._id }, { local: { password: hash, email: dbArtist.local.email }, password: hash }, { new: true })
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateArtist: function (req, res) {
    db.Artist
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
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
      .findById({ _id: req.params.id })
      .populate("art")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
