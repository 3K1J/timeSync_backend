var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

function Dates_users() {return knex('dates_users')}


// **************************** CREATE ***********************************

// ^^^^^^ Create Dates_users ^^^^^^

router.post('/', function (req, res){

  Dates_users().insert({
  date_id: req.body.date_id,
  user_id: req.body.user_id
}, ['date_id', 'user_id']).then(function(result){
     res.json(result)
  })
});

// **************************** READ ***********************************

// ^^^^^^ Read Dates_users ^^^^^^

router.get('/', function(req, res){

  knex('dates_users').select().then(function(result){
    res.json(result);
  })
});

// ^^^^^^ Read One Dates_users ^^^^^^

router.get('/:id', function(req, res){

  knex('dates_users').where(req.params.id).first().then(function(result){
    res.json(result)
  })
})

module.exports = router
