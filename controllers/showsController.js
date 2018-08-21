const db = require("../models");

module.exports = {
    getAllShows: function (req, res) {
        db.Shows
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Shows
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    createShow: function (req, res) {
        db.Shows
            .create(req.body)
            .then(dbShow => {
                console.log(dbShow)
                console.log("req.params.id: " + req.params.id )
                return db.Artist.findOneAndUpdate({ _id: req.params.id }, { $push: { shows: dbShow._id } }, { new: true })
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            })
    },
    editShow: function (req, res) {
        db.Shows
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    removeShow: function (req, res) {
        db.Shows
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

}