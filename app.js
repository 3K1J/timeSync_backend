

const cors = require('cors')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('Public'))
app.use(cors())


app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})
