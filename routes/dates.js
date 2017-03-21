var express = require('express')
var router = express.Router()
var queries = require('../db/queries')
var passport = require('../passport')

router.get('/auth/slack', passport.authorize('slack'))

router.get('/auth/slack/callback',
  passport.authorize('slack', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/main')
)

router.get('/dates/:event_ID' (req, res)=>{
  queries.getDates(req.params.event_ID)
    .then(dates=>dates)
})



module.exports = router
