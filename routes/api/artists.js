const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");

// Matches with "/api/user"
router.route("/")
  .get(artistsController.findAllArtist)
  .post(artistsController.createArtist);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(artistsController.findArtistById)
  .put(artistsController.updateArtist)
  .delete(artistsController.removeArtist);

// Matches with "/api/user/shows/:id"
router
  .route("/shows/:id")
  .get(artistsController.getShowsByArtist)

// Matches with "/api/user/art/:id"
router
  .route("/art/:id")
  .get(artistsController.getArtByArtist)

// Matches with "/api/user/:name/:password" 
router
  .route("/:name/:password")
  .get(artistsController.checkLogin)

module.exports = router;