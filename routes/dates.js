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

module.exports = router
