const router = require("express").Router();
const artistRoutes = require("./artists");
const artRoutes = require("./art");
const showRoutes = require("./shows")
// const artistProtected = require("../artistsProtected")
// const authRoutes = require("./authentication-routes")

// router.use("/", authRoutes);
router.use("/user", artistRoutes);
router.use("/art", artRoutes);
router.use("/shows", showRoutes);
// router.use("/", artistProtected);



module.exports = router;