const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

const local = new LocalStrategy(
  {
    usernameField: 'username', // not necessary, DEFAULT
  },
  function (username, password, done) {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    });
  }
);

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  done(null, { _id: user._id });
});

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, 'username', (err, user) => {
    done(null, user);
  });
});

//  Use Strategies
passport.use(local);

module.exports = passport;
