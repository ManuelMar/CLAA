const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');

// get that db
const User = mongoose.model('users'); // 1 arg means fetch class

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // relative path causes googe auth issues
      proxy: true // TODO: setup proxy in packages.json
    },
    async (acessToken, refreshToken, profile, done) => {
      // write user info to DB
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      } else {
        // save user to DB
        const user = await new User({
          googleID: profile.id,
          displayName: profile.name.givenName,
          image: profile.url
        }).save(); // dont forget to save!
        done(null, user);
      }
    }
  )
);
