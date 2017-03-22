const database = require('./knex.js')

module.exports = {
  verifyOrAddUser,
  getAllDates,
  getDates,
  getDate,
  postDate,
  getAllEventsInvitees,
  getEventsInviteesByEvent,
  getEventsInviteesByUser,
  postEventInvitee
}

function verifyOrAddUser(user) {
  return database('users').select('*').where('name', user.name)
    .then(user =>{
      if (user.length < 1) {
        var newUser = {}
        newUser.name = user.name
        newUser.email = user.email
        database("users").insert(newUser)
          .then(()=>user)
      }else {
        return user
      }
    })
}

function getAllDates() {
  return database('dates').select('*')
}

function getDates(event_id) {
  return database('dates').select('*').where('event_id', event_id)
}

function getDate(date_id) {
  return database('dates').select('*').where('id', date_id)
}

function postDate(date) {
  return database('dates').insert(date)
}





function getAllEventsInvitees() {
  return database('events_users').select('*')
}

function getEventsInviteesByEvent(event_id) {
  return database('events_users').select('*').where('event_id', event_id)
}

function getEventsInviteesByUser(user_id) {
  return database('events_users').select('*').where('user_id', user_id)

}

function postEventInvitee(eventUser){
  return database('events_users').insert(eventUser)
}
