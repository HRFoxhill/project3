const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

const PROTECTED = (req,res,next) => {
    ensureLoggedIn('/forbidden')(req,res,next);
}

module.exports = PROTECTED;