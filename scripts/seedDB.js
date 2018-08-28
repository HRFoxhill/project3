const mongoose = require("mongoose");
const db = require("../models");
// This file empties all collections and inserts the dummy's

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/artdb"
);

const artistSeed = [
    {
        email: "DBrewer@Art.com",
        password: "password",
        artistName: "Dick Brewer",
        phone: "506-344-3232",
        websiteURL: "http://dixplexia.com/",
        bio: "My work revolves around vibration and the transformation of energy. I use a 21,000 RPM die grinder to mine abstract images. Over the course of 27 years, the vibration from the die grinder has shaken me out of the mundane and into the sacred. As I work, I listen to music and let it guide my movements. Music and sound are the underpinnings of my work. The marks I make reference techno, jazz, symphonic and primitive forms. The whining of the grinder abrading the plex mingles with the baseline and melody, punctuated with my own percussion. The effect is mesmerizing and meditative. A rhythmic, harmonic hum creates a gateway to higher consciousness through a vibrating field of visual sound, blurring sensory boundaries.",
        profilePhoto: "http://dixplexia.com/thumbnails/pics/17Isisframe.jpg"
    },
    {
        email: "LauraGarabedian@art.com",
        password: "password1",
        artistName: "Laura Garabedian",
        phone: "506-344-3232",
        websiteURL: "http://lauragarabedian.com/",
        bio: "Through the years, I’ve experimented with many different media, wandering many paths. Now I’ve settled into the twin focuses of watercolor and oils. I find the dichotomy of their approach refreshing, and each time my hands move from one to the other I approach my work with new ideas and a cleaner view of where I should go. \n Art is a way for my to communicate my love of the natural world and the fantasy I see within it. I think that the creation of a narrative around wildlife and fantastical animals can lead people to see the world and the many lives encompassed within it with more compassion and joy, returning the wonder of childlike curiosity to their lives.",
        profilePhoto: "http://lauragarabedian.com/wp-content/uploads/TreeLion_LauraGarabedian-1.jpg"
    },
    {
        email: "AlWadzinski@art.com",
        password: "password2",
        artistName: "Al Wadzinski",
        bio: "In working with found objects I am very involved in process. The pieces may be sewn, hammered, welded or bolted together. I try to use them objectively and though I appreciate that reusing materials helps better the earth, my art isn’t quite meant as a “green” platform. I am merely trying to see beauty in the objects no matter how unwanted they may appear. I don’t have to worry about having enough materials, I just have to worry about how to put it all together to evoke more of an understanding. My cornerstone might be a twisted piece of plastic, something so mundane or something very valuable.",
        profilePhoto: "http://gallery360mpls.com/galleries/awadzinski/index.php?name=awadzinski#"
    }
];

const LauraArtSeed = [
    {
        title: "Mare and Foal",
        medium: "Painting",
        url: "https://i.etsystatic.com/5874145/r/il/198765/1589947277/il_570xN.1589947277_gif8.jpg",
        dimensions: "13x19",
        yearCreated: "2017",
        description: "This was commissioned as a gift to a mother and has been an amazingly heartfelt piece to create. I think the warmth of feelings that went into it continue to shine through color and spirit.",
    },
    {
        title: "Descending Ruby Drops",
        medium: "Painting",
        url: "https://i.etsystatic.com/5874145/r/il/a2d38a/690549292/il_570xN.690549292_a0vx.jpg",
        dimensions: "13x19",
        yearCreated: "2018",
        description: "Magpie Gryph, trailing streams of gems in his flight...",
    },
]

const DickArtSeed = [
    {
        title: "Isis",
        medium: "Mixed Media",
        url: "http://dixplexia.com/thumbnails/pics/17Isisframe.jpg",
        dimensions: "27x21",
        yearCreated: "2017",
        description: "Created using a 21,000 RPM grinder.",
    },
    {
        title: "Eldorado Blvd",
        medium: "Mixed Media",
        url: "http://dixplexia.com/thumbnails/pics/5EldoradoBlvdframe.jpg",
        dimensions: "29x23",
        yearCreated: "2018",
        description: "Created using a 21,000 RPM grinder.",
    },
]

const AlArtSeed = [
    {
        title: "Grecian Seahorse",
        medium: "Mixed Media",
        url: "http://gallery360mpls.com/galleries/awadzinski/art/gal360one.jpg",
        dimensions: "51x32x16",
        yearCreated: "2017",
        description: "Created using found items",
    },
    {
        title: "Saw-whet Owl",
        medium: "Mixed Media",
        url: "http://gallery360mpls.com/galleries/awadzinski/art/gal360four.jpg",
        dimensions: "26x18x12",
        yearCreated: "2016",
        description: "Created using found items",
    },
]

let dickId = "";
let lauraId = "";
let alId = "";
// below enters all the artists into the DB and then basically hard codes their associations with their art - works to get us all started. Not very scalable - better to add through website now that that functionality is working
db.Artist
    .remove({})
    .then(() => db.Artist.collection.insertMany(artistSeed))
    .then(data => {
        console.log(data);
        dickId = data.insertedIds[0];
        lauraId = data.insertedIds[1];
        alId = data.insertedIds[2];
        console.log(data.result.n + " records inserted");
        // process.exit(0);
        console.log(dickId)
        db.Art
            .remove({})
            .then(() => db.Art.collection.insertOne(DickArtSeed[0]))
            .then(data => {
                console.log(data.ops[0]._id);
                db.Artist.collection.findOneAndUpdate({ _id: dickId }, { $push: { art: data.ops[0]._id } }, { new: true })
                    .then(data => console.log(data))
                    .catch(err => {
                        console.error(err);
                        process.exit(1);
                    })    
            })
            .then(() => db.Art.collection.insertOne(DickArtSeed[1]))
            .then(data => {
                console.log("======================")
                console.log(data.ops[0]._id);
                db.Artist.collection.findOneAndUpdate({ _id: dickId }, { $push: { art: data.ops[0]._id } }, { new: true })
                    .then(data => console.log(data))
                    .catch(err => {
                        console.error(err);
                        process.exit(1);
                    })    
            })
            .then(() => db.Art.collection.insertOne(LauraArtSeed[0]))
            .then(data => {
                console.log(data.ops[0]._id);
                db.Artist.collection.findOneAndUpdate({ _id: lauraId }, { $push: { art: data.ops[0]._id } }, { new: true })
                    .then(data => console.log(data))
                    .catch(err => {
                        console.error(err);
                        process.exit(1);
                    })    
            })
            .then(() => db.Art.collection.insertOne(LauraArtSeed[1]))
            .then(data => {
                console.log("======================")
                console.log(data.ops[0]._id);
                db.Artist.collection.findOneAndUpdate({ _id: lauraId }, { $push: { art: data.ops[0]._id } }, { new: true })
                    .then(data => console.log(data))
                    .catch(err => {
                        console.error(err);
                        process.exit(1);
                    })    
            })
            .then(() => db.Art.collection.insertOne(AlArtSeed[0]))
            .then(data => {
                console.log(data.ops[0]._id);
                db.Artist.collection.findOneAndUpdate({ _id: alId }, { $push: { art: data.ops[0]._id } }, { new: true })
                    .then(data => console.log(data))
                    .catch(err => {
                        console.error(err);
                        process.exit(1);
                    })    
            })
            .then(() => db.Art.collection.insertOne(AlArtSeed[1]))
            .then(data => {
                console.log("======================")
                console.log(data.ops[0]._id);
                db.Artist.collection.findOneAndUpdate({ _id: alId }, { $push: { art: data.ops[0]._id } }, { new: true })
                    .then(data => {
                        console.log(data);
                        process.exit(0);
                    })
                    .catch(err => {
                        console.error(err);
                        process.exit(1);
                    })    
            })
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })

