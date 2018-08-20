var mongoose = require("mongoose");
// var bcrypt   = require('bcrypt-nodejs');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArtistSchema = new Schema({
  // for authentication/password
  local: {
    email: String, //unique, fixed structure
    password: String, //limitations needed
  },
  artistName: String, //Full name of artist or whatever they call themselves
  categories: String, //autopopulated based on categories assigned to artworks
  phone: String, //phone number (optional)
  websiteURL: String, //artist's personal website URL if exists
  bio: String, //aka artist statement
  profilePhoto: String, //url?

  // The ref property links the ObjectId to the Art model
  // This allows us to populate the User with an associated Art
  // Can create an array with schema types if artists will have more than one type of medium

  art: [{
    type: Schema.Types.ObjectId,
    ref: "Art"
  }],

  shows: [{
    type: Schema.Types.ObjectId,
    ref: "Shows"
  }]
});

// Placeholder for hash and check of authentication

// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// This creates our model from the above schema, using mongoose's model method
var Artist = mongoose.model("Artist", ArtistSchema);



// Export the User model
module.exports = Artist;
