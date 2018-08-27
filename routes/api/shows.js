const router = require("express").Router();
const showsController = require("../../controllers/showsController")

// Matches with "api/shows"
router.route("/")
    .get(showsController.getAllShows)

// Matches with "api/shows/:id"
router.route("/:id")
    .get(showsController.findById)

module.exports = router;