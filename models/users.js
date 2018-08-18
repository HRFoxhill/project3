var mongoose = require("mongoose");
// var bcrypt   = require('bcrypt-nodejs');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // for authentication/password
  local: {
    email: String,
    password: String,
  },

  artists: Boolean,

  patron: Boolean,

  profileName: String,

  bio: String,

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
var User = mongoose.model("User", UserSchema);



// Export the User model
module.exports = User;
