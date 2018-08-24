const router = require("express").Router();
const artController = require("../../controllers/artController");

// Matches with "/api/art"
router.route("/")
  .get(artController.findAll)
// .post(artController.create);

// Matches with "/api/art/create/:id"
// router.route("/create/:id")
//   .post(artController.create)

// Matches with "/api/art/:id"
router
  .route("/:id")
  .get(artController.findById)
  // .put(artController.update)
  // .delete(artController.remove);

// Matches with "/api/art/:medium"
router
    .route("/art/:medium")
    .get(artController.findByMedium)


module.exports = router;