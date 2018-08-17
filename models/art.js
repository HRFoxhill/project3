var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArtSchema object
// This is similar to a Sequelize model
var ArtSchema = new Schema({
  // `title` is of type String
  title: String,
  // `medium` is of type String
  medium: String,
//   datePosted: 

  
});

// This creates our model from the above schema, using mongoose's model method
var Art = mongoose.model("Art", ArtSchema);

// Export the Art model
module.exports = Art;
