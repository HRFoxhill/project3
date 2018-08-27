const router = require("express").Router();
const artController = require("../../controllers/artController");

// Matches with "/api/art"
router.route("/")
  .get(artController.findAll)

// Matches with "/api/art/:id"
router
  .route("/:id")
  .get(artController.findById)

// Matches with "/api/art/:medium"
router
    .route("/art/:medium")
    .get(artController.findByMedium)


module.exports = router;