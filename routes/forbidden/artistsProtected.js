const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");
const artController = require("../../controllers/artController")
const showsController = require("../../controllers/showsController")

// app.get('/forbidden', (req,res) => {
//     res.send(403, 'You are not authorized')
// });

// Protects routes from being used 
// by users who are not logged in.
// If the server doesn't find a valid
// user token, all requests to these routes
// will fail
router.use(require("./forbidden"))

router.route("/forbidden").get((req,res) => {
    res.send(403, 'You are not authorized')
});

// Matches with "/api/protected/user/:id"
router.route("/user/:id")
    .put(artistsController.updateArtist)
    .delete(artistsController.removeArtist);

// Matches with "/api/protected/art/create/:id"
router.route("/art/create/:id")
    .post(artController.create)

// Matches with "/api/protected/art/:id"
router.route("/art/:id")
    .put(artController.update)
    .delete(artController.remove);

// Matches with "/api/protected/shows/:id"
router.route("/shows/:id")
    .put(showsController.editShow)
    .delete(showsController.removeShow);

// Matches with "/api/protected/shows/create/:id"
router.route("/shows/create/:id")
    .post(showsController.createShow);

module.exports = router