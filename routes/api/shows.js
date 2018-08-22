const router = require("express").Router();
const showsController = require("../../controllers/showsController")

// Matches with "api/shows"
router.route("/")
    .get(showsController.getAllShows)
    // .post(showsController.createShow);

// Matches with "api/shows/create/:artistId"
router.route("/create/:id")
    .post(showsController.createShow);

// Matches with "api/shows/:id"
router.route("/:id")
    .get(showsController.findById)
    .put(showsController.editShow)
    .delete(showsController.removeShow);

module.exports = router;