var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Users() {return knex('users')}

// **************************** CREATE **************************** 

// ^^^^^^ Create User ^^^^^^

router.post('/', function(req, res){

  Users().insert({
    name: req.body.name,
    email: req.body.email
  }, ['id', 'name', 'email']).then(function(result){
    res.json(result);
  })
})

// **************************** READ ****************************

// ^^^^^^ Read User ^^^^^^

router.get('/', function (req, res){

  knex('users').select().then(function(result){
    res.json(result)
  })
})

// ^^^^^^ Read One User ^^^^^^

router.get('/:id', function(req, res){
  knex('users').where('id', req.params.id).first().then(function(result){
    res.json(result)
  })
})

module.exports = router
