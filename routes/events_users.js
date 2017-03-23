var express = require('express')
var router = express.Router()
var queries = require('../db/queries')


router.get('/all', (req, res)=>{
  queries.getAllEventsInvitees()
    .then(EventsInvitees=>{
      res.json(EventsInvitees)
    })
})

router.get('/eventID/:event_id', (req, res)=>{
  queries.getEventsInviteesByEvent(req.params.event_id)
    .then(EventsInvitees=>{
      res.json(EventsInvitees)
    })
})

router.get('/userID/:user_id', (req, res)=>{
  queries.getEventsInviteesByUser(req.params.user_id)
    .then(EventsInvitees=>{
      res.json(EventsInvitees)
    })
})

router.post('/', (req, res)=>{
  queries.postEventInvitee(req.body)
    .then((EventsInvitees)=>{
      res.send(EventsInvitees)
    })
    .catch(err=>{
      res.status(500).send('Event_Invitee entry failed')
    })
})

router.delete('/deleteEventID/:event_id', (req, res)=>{
  queries.deleteEventsInviteesByEvent(req.params.event_id)
    .then(EventsInvitees=>{
      res.json(EventsInvitees)
    })
})

router.delete('/deleteUserID/:user_id', (req, res)=>{
  queries.deleteEventsInviteesByUser(req.params.user_id)
    .then(EventsInvitees=>{
      res.json(EventsInvitees)
    })
})

module.exports = router
