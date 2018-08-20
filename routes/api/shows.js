const router = require("express").Router();
const showsController = require("../../controllers/showsController")

// Matches with "api/shows"
router
    .get(showsController.getAllShows)
    .post(showsController.createShow);

// Matches with "api/shows/:id"
router
    .put(showsController.editShow)
    .delete(showsController.removeShow);

module.exports = router;