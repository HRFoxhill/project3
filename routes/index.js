const path = require("path");
const apiRoutes = require("./api");
const protectedRoutes = require('./forbidden/artistsProtected');




module.exports = function (app) {
  const passport = require('../passport-init')(app);
  app.use("/api", apiRoutes);
  app.use("/api/protected", protectedRoutes);

  // If no API routes are hit, send the React app
  // !!!change to "../client/build/index.html" once we have a build folder
  app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}
