const router = require("express").Router();
const artController = require("../../controllers/artController");

// Matches with "/api/art"
router.route("/")
  .get(artController.findAll)
// .post(artController.create);

// Matches with "/api/art/create/:id"
router.route("/create/:id")
  .post(artController.create)

// Matches with "/api/art/:id"
router
  .route("/:id")
  .get(artController.findById)
  .put(artController.update)
  .delete(artController.remove);

// Matches with "/api/art/art/:category"
router
  .route("/art/:category")
  .get(artController.findByCategory)


module.exports = router;