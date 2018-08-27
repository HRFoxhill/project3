var mongoose = require("mongoose");
var bcrypt = require("bcrypt")
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArtistSchema = new Schema({

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: "Email is required"
  }, 
  password: {
    type: String,
    trim: true,
    required: "Password is required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  artistName: String, //Whatever they want to call themselves
  medium: Array, //autopopulated based on categories assigned to artworks
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
    ref: "Show"
  }]
});

ArtistSchema.methods = {
  toJSON: function () {
    var obj = this.toObject();
    delete obj.password;
    // delete obj.local.password
    return obj;
  },
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
};

ArtistSchema.pre('save', function (next) {
  this.password = this.hashPassword(this.password)
  next()
});


// This creates our model from the above schema, using mongoose's model method
var Artist = mongoose.model("Artist", ArtistSchema);



// Export the User model
module.exports = Artist;
