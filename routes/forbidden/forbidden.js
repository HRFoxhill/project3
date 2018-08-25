const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

const PROTECTED = (req,res,next) => {
    console.log("Protecting....");
    ensureLoggedIn('/forbidden')(req,res,next);
    // console.log(res)
}

module.exports = PROTECTED;