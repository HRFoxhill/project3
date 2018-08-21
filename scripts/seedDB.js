const mongoose = require("mongoose");
const db = require("../models");

// This file empties all collections and inserts the dummy's

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/artdb"
);

const artistSeed = [
    {
        email: "artist1@art.com",
        password: "hunter2",
        artistName: "Haley Does Art",
        phone: "506-344-3232",
        websiteURL: "https://www.tumblr.com/search/haleydoesart",
        bio: "Haley likes doing art.",
        profilePhoto: "http://haleymossart.com/images/home/HaleyWXEL2.jpg"
    },
    {
        email: "artist2@art.com",
        password: "hunter3",
        artistName: "Haley Doesn't Do Art",
        phone: "506-344-3232",
        websiteURL: "https://www.tumblr.com/search/haleydoesart",
        bio: "Haley doesn't like doing art.",
        profilePhoto: "http://www.haleyart.com/"
    },
    {
        email: "artist3@art.com",
        password: "hunter4",
        artistName: "Haley Sometimes Does Art",
        phone: "506-344-3232",
        websiteURL: "https://www.tumblr.com/search/haleydoesart",
        bio: "Haley Feels Indifferent about Doing Art",
        profilePhoto: "google.com"
    }
];

const artSeed = [
    {
        title: "",
        category: "",
        url: "",
        dimensions: "",
        yearCreated: "1492",
        description: "Fine stuff",
    }
]