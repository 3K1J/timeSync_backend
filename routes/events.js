var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Events() {return knex('events')}

// **************************** CREATE ***********************************

// ^^^^^^ Create User ^^^^^^

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

  // ^^^^^^ Read User ^^^^^^

  router.get('/', function(req, res){

    knex('events').select().then(function(result){
      res.json(result);
    })
  })

// ^^^^^^ Read One User ^^^^^^

router.get('/:id', function(req, res){
  knex('users').where(req.params.id).first().then(function(result){
    res.json(result)
  })
})

module.exports = router
