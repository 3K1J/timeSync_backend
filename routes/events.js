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

  router.get('/:id/stats', function(req, res){

    knex('events').select('dates_users.date_id').where('events.id', req.params.id)
    .join('dates', 'event_id', 'events.id')
    .join('dates_users', 'dates_users.date_id', 'dates.id')
    .groupBy('date_id').count('dates_users.user_id')
    .then(function(result){
      var winningCount = 0
      var winner = {}
      for (var i = 0; i < result.length; i++) {
        if(result[i].count > winningCount){
            winningCount = result[i].count
            winner = result[i]
        }
      }
      console.log();
      res.json(winner)
      // return winner
    })
    // .then(function(winner){
    //   knex('dates').select('*').where('id', winner.date_id).then(function(result){
    //     result[0].count = winner.count
    //     res.json(result)
    //   })
    // })
  })


  // ^^^^^^ Read Events ^^^^^^

  router.get('/', function(req, res){

  knex('events').select().then(function(result){
      res.json(result);
    })
  })

// ^^^^^^ Read One Event ^^^^^^

router.get('/:id', function(req, res){
  knex('events').where('id', req.params.id).first().then(function(result){
    res.json(result)
  })
})

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
