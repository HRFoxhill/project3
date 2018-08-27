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

// Matches with "/api/user/shows/:id"
router
  .route("/shows/:id")
  .get(artistsController.getShowsByArtist)

// Matches with "/api/user/art/:id"
router
  .route("/art/:id")
  .get(artistsController.getArtByArtist)

// Matches with "/api/user/artist/:name/:password" 
router
  .route("/artist/:name/:password")
  .get(artistsController.checkLogin)

// Matches with "/api/user/artist/:name"
router
  .route("/artist/:name")
  .get(artistsController.findArtistByName)

  // Matches with "/api/user/art/artist/:id"
router
  .route("/art/artist/:id")
  .get(artistsController.findArtistByArt)

module.exports = router;