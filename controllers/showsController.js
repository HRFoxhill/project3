const db = require("../models");

module.exports = {
    getAllShows: function (req, res) {
        db.Shows
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    createShow: function (req, res) {
        db.Shows
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    editShow: function (req, res) {
        db.Shows
            .findOneAndUpdate({ _id: req.params.id })
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