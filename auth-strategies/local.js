let Strategy = require('passport-local').Strategy;
let User = require('../models/artists')

const strategy = new Strategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },

    function (username, password, done) {
        User.find({ email: username }).then(
            function (DBuser) {
                if (DBuser.length === 0) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (DBuser[0].checkPassword(password) === false) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, DBuser);
            }
        )
            .catch(err => console.log(err))
    }
);

module.exports = strategy;