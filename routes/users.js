var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../db/queries')

function Users() {return knex('users')}

// **************************** CREATE ****************************

// ^^^^^^ Create User ^^^^^^

router.post('/', function(req, res){
  queries.verifyOrAddUser(req.body)
    .then(function(result){
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
