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
      // .then(dbArtist => {
      //   let hash = bcrypt.hashSync(dbArtist.password, saltRounds)
      //   return db.Artist.findOneAndUpdate({ _id: dbArtist._id }, { local: { password: hash, email: dbArtist.email }, password: hash }, { new: true })
      // })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.send(err)
        // res.status(422).json(err)
      });
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
      .then(dbModel => {
        console.log(req.user)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err))
  },
  checkLogin: function (req, res) {
    console.log("name: " + req.params.name)
    db.Artist
      .find({ email: req.params.name })
      .then(dbArtist => {
        console.log(dbArtist[0].password)
        let check = bcrypt.compareSync(req.params.password, dbArtist[0].password)
        if (check === true) {
          return dbArtist
        }
        else return false
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.send(err)
        // res.status(422).json(err)
      })
  },
  findArtistByName: function (req, res) {
    console.log(req.params.name);
    db.Artist
      .find({ artistName: req.params.name })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findArtistByArt: function (req, res) {
    db.Artist
      .find({ art: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
};
