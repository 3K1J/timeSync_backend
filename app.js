
const logger = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const session = require('express-session')
require('dotenv').config()
const authRoute = require('./routes/routes.js')
const usersRoute = require('./routes/users.js')
const datesRoute = require('./routes/dates.js')
const eventsRoute = require('./routes/events.js')
const dates_usersRoute = require('./routes/dates_users.js')
const eventsUsersRoute = require('./routes/events_users.js')

// const passportLocal = require('passport-local')

const passport = require('./passport')


app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
  secret: 'ch1cken nugget',
  saveUninitialized: true,
  resave: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('Public'))
app.use('/', authRoute)
app.use('/users', usersRoute)
app.use('/dates', datesRoute)
app.use('/events', eventsRoute)
app.use('/dates_users', dates_usersRoute)
app.use('/events_users', eventsUsersRoute)


app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})
