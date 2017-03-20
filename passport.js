const {CLIENT_ID, CLIENT_SECRET} = process.env,
  {Strategy as SlackStrategy} = require('passport-slack'),
  passport = require('passport')

var users = require('./users')

passport.use(new SlackStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET
}, (accessToken, refreshToken, profile, done) => {
  // Run function to verify if user exists
  done(null, profile);
}));

passport.serializeUser(function (profile, done){
  done(null, profile)
});

passport.deserializeUser(function (profile, done){
  done(null, profile)
})

module.export = passport
