// This file is NOT helpful yet if you need to make connections between artists & art

// 

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
        title: "sdsef",
        url: "https://docs.google.com/document/d/19EPn31Xiv5a2MeQ14JDnzo3ST6YVtzACMu2r8EJ1xkI/edit",
        dimensions: "32x32",
        yearCreated: "1492",
        description: "Fine stuff",
        index: 0,
        medium: "Ceramics"
    },
    {
        title: "sdsefwewefef2",
        url: "https://trello.com/c/QuFem8i4/32-list-of-art-medium-types-and-descriptions",
        dimensions: "33x33",
        yearCreated: "1495",
        description: "Fine stuff too",
        index: 1,
        medium: "Ceramics"
    },
]


db.Artist
    .remove({})
    .then(() => db.Artist.collection.insertMany(artistSeed))
    .then(data => {
        console.log(data)
        console.log(data.result.n + " records inserted");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })

// need to add the artist then their corresponding works
db.Art
    .remove({})
    .then(() => db.Art.collection.insertMany(artSeed))
    .then(data => {
        console.log(data)
        // if the art index matches the insertedIds property insert that art piece into art DB then update the artist @ the value with the art id

        console.log(data.result.n + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })