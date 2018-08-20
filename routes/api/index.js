const router = require("express").Router();
const artistRoutes = require("./artists");
const artRoutes = require("./art");
const showRoutes = require("./shows")

router.use("/user", artistRoutes);
router.use("/art", artRoutes);
router.use("/shows", showRoutes)


module.exports = router;