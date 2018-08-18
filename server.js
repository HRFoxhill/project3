// Dependencies
// ===================================
const express = require("express");
// const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var logger = require("morgan");

// Initialize Express
// =====================================
const PORT = process.env.PORT || 3001;
const app = express();

// Configure middleware
// =====================================
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions

// !!anyone know if we need both of these?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the Mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/artdb";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// =====================================
// Add routes, both API and view
app.use(routes);

// !!not sure we need the below code with pulling in the routes (not finished). Joe, what's your take? - Amanda

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
