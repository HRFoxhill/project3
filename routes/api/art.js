const router = require("express").Router();
const artControler = require("../../controllers/artController");

// Matches with "/api/art"
router.route("/")
  .get(artControler.findAll)
  .post(artControler.create);

// Matches with "/api/art/:id"
router
  .route("/:id")
  .get(artControler.findById)
  .put(artControler.update)
  .delete(artControler.remove);

// Matches with "/api/art/:category"
router
    .route("/art/:category")
    .get(artControler.findByCategory)


module.exports = router;