var express = require('express')
var router = express.Router()
var queries = require('../db/queries')

router.get('/auth/slack', passport.authorize('slack'))

router.get('/auth/slack/callback',
  passport.authorize('slack', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/main')
);

module.exports = router
