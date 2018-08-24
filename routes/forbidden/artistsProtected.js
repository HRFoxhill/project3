const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");
const artController = require("../../controllers/artController")
const showsController = require("../../controllers/showsController")

// app.get('/forbidden', (req,res) => {
//     res.send(403, 'You are not authorized')
// });

router.use(require("./forbidden"))

router.route("/forbidden").get((req,res) => {
    res.send(403, 'You are not authorized')
});

router.route("/user/:id")
    .put(artistsController.updateArtist)
    .delete(artistsController.removeArtist);

router.route("/art/create/:id")
    .post(artController.create)

router.route("/art/:id")
    .put(artController.update)
    .delete(artController.remove);

router.route("/shows/:id")
    .put(showsController.editShow)
    .delete(showsController.removeShow);

router.route("/shows/create/:id")
    .post(showsController.createShow);

module.exports = router