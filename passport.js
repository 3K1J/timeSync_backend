const {CLIENT_ID, CLIENT_SECRET} = process.env,
      SlackStrategy = require('passport-slack').Strategy,
      passport = require('passport')

// var users = require('./users')
var queries = require('./db/queries')

passport.use(new SlackStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET
}, (accessToken, refreshToken, profile, done) => {

  queries.verifyOrAddUser(profile)
    .then(profile =>{
      done(null, profile)
    })
}));

passport.serializeUser(function (profile, done){
  done(null, profile)
});

passport.deserializeUser(function (profile, done){
  done(null, profile)
})

module.export = passport
