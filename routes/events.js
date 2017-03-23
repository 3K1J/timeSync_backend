var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Events() {return knex('events')}

// **************************** CREATE ***********************************

// ^^^^^^ Create Events ^^^^^^

router.post('/', function(req, res){

  Events().insert({
    title: req.body.title,
    body: req.body.body,
    user_id:  req.body.user_id},
    ['id', 'title', 'body', 'user_id']).then(function(result){
      res.json(result);
    })
  })

  // **************************** READ ***********************************

  // ^^^^^^ Read Events ^^^^^^

  router.get('/', function(req, res){

  knex('events').select().then(function(result){
      res.json(result);
    })
  })

// ^^^^^^ Read One Event ^^^^^^

router.get('/:id/users', function(req, res){
  knex('users')
  .select('users.name as userName', 'users.id as userID', 'users.email as userEmail')
  .join('events_users', 'events_users.user_id', '=', 'users.id')
  .join('events', 'events_users.event_id', '=', 'events.id')
  .where('events.id', req.params.id).then(function(result){
    res.json(result)
  })
})

module.exports = router
