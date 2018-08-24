const path = require("path");
// const router = require("express").Router();
// const app = require("express")();
const apiRoutes = require("./api");
// const PROTECTED = require('./forbidden');
const protectedRoutes = require('./forbidden/artistsProtected');
// const authenticationRoutes = require('./authentication-routes')




module.exports = function (app) {
  const passport = require('../passport-init')(app);

  app.use("/api", apiRoutes);
  // app.use(authenticationRoutes)
  // If no API routes are hit, send the React app
  // protectedRoutes.use(PROTECTED)
  app.use("/api/protected", protectedRoutes);

  // !!!change to "../client/build/index.html" once we have a build folder
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
}
