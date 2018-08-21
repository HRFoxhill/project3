var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArtSchema object
// This is similar to a Sequelize model
var ArtSchema = new Schema({
  // `title` is of type String **required
  title: String,
  // `category` is of type String **required
  medium: String,
// adding url to use for pictures for now **required
  url: String,
// dimensions of artwork piece (optional)
  dimensions: String,
// year artwork was made (optional)
  yearCreated: String,
// short description of piece (optional)
  description: String
});

// This creates our model from the above schema, using mongoose's model method
var Art = mongoose.model("Art", ArtSchema);

// Export the Art model
module.exports = Art;
