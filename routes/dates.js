var express = require('express')
var router = express.Router()
var queries = require('../db/queries')


router.get('/all', (req, res)=>{
  queries.getAllDates()
    .then(dates=>{
      res.json(dates)
    })
})

router.get('/:event_ID', (req, res)=>{
  queries.getDates(req.params.event_ID)
    .then(dates=>{
      res.json(dates)
    })
})

router.get('/date/:date_ID', (req, res)=>{
  queries.getDate(req.params.date_ID)
    .then(date=>{
      res.json(date)
    })
})

router.post('/', (req, res)=>{
  queries.postDate(req.body)
    .then((dateID)=>{
      res.send(dateID)
    })
    .catch(err=>{
      res.status(500).send('Date entry failed')
    })
})

router.patch('/patchDateDateID/:date_ID', (req, res)=>{
  queries.patchDateDateID(req.params.date_ID, req.body)
    .then(date=>{
      res.json(date)
    })
})

router.patch('/patchDatesEventID/:event_ID', (req, res)=>{
  queries.patchDateEventID(req.params.event_ID, req.body)
    .then(date=>{
      res.json(date)
    })
})

router.delete('/deleteDateDateID/:date_ID', (req, res)=>{
  queries.deleteDateDateID(req.params.date_ID)
    .then(date=>{
      res.json(date)
    })
})

router.delete('/deleteDatesEventID/:event_ID', (req, res)=>{
  queries.deleteDateEventID(req.params.event_ID)
    .then(date=>{
      res.json(date)
    })
})

module.exports = router
