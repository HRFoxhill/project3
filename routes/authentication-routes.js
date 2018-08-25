var router = require('express').Router()

module.exports = function (passport) {
    router.post('/api/login',
        passport.authenticate('local'),
        function (req, res) {
            console.log("Req: " + req.user)
            res.json({ success: (req.user ? "Yes" : "No"), user: req.user });
        }
    )

    router.get('/api/logout',
        function (req, res) {
            const old_user = req.user;
            req.logout();
            console.log("User Logged out: " + req.user)
            res.json({ success: (req.user ? "No" : "Yes"), user: req.user, "old_user": old_user });
        });

    return router;

}

