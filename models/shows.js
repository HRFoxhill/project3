var mongoose = require("mongoose");
// var bcrypt   = require('bcrypt-nodejs');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ShowsSchema = new Schema({
  // for authentication/password

  title: String,

  location: String,

  time: String,

  date: String,

  bio: String,
  
  URL: String

});


// This creates our model from the above schema, using mongoose's model method
var Show = mongoose.model("Show", ShowsSchema);



// Export the User model
module.exports = Show;
