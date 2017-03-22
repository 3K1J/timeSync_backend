var express = require('express')
var router = express.Router()
var queries = require('../db/queries')


router.get('/all', (req, res)=>{
  queries.getAllEventsInvitees()
    .then(EventsInvitees=>{
      res.json(EventsInvitees)
    })
})

router.get('/event/:event_id', (req, res)=>{
  queries.getEventsInviteesByEvent(req.params.event_ID)
    .then(EventsInvitees=>{
      res.json(EventsInvitees)
    })
})

router.get('/user/:user_id', (req, res)=>{
  queries.getEventsInviteesByUser(req.params.user_id)
    .then(EventsInvitees=>{
      res.json(EventsInvitees)
    })
})

router.post('/', (req, res)=>{
  queries.postEventInvitee(req.body)
    .then((eventUser)=>{
      res.send(eventUser)
    })
    .catch(err=>{
      res.status(500).send('Event_Invitee entry failed')
    })
})

module.exports = router
