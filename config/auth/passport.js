const
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    DB = require('./DB');

passport.use('local', new LocalStrategy({
        usernameField: 'email'
    },
    function (username, password, done) {
        DB.findUserByUsername(username)
            .then(user => {
                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect username.'
                    });
                }
                if (!DB.checkPassword(password, user.password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                return done(null, user);
            })
            .catch(error => done(error));
    }
))

passport.serializeUser(function (user, cb) {
    cb(null, user.email);
});

passport.deserializeUser(function (email, cb) {
    DB.findUserByUsername(email)
        .then(user => {
            cb(null, user)
        })
        .catch(err => cb(err))
});