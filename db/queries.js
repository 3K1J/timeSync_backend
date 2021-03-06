const database = require('./knex.js')

module.exports = {
  verifyOrAddUser,
  getAllDates,
  getDates,
  getDate,
  postDate,
  patchDateDateID,
  patchDatesEventID,
  deleteDateDateID,
  deleteDatesEventID,
  getAllEventsInvitees,
  getEventsInviteesByEvent,
  getEventsInviteesByUser,
  postEventInvitee,
  deleteEventsInviteesByEvent,
  deleteEventsInviteesByUser
}

function verifyOrAddUser(checkUser) {
  return database('users').select('*').where('name', checkUser.name)
    .then(user =>{
      if (user.length < 1) {
        var newUser = {}
        newUser.name = checkUser.name
        newUser.email = checkUser.email
        return database("users").insert(newUser).returning('id')
          .then((user_id)=>{
            var newUserArry = []
            newUser.id = user_id[0]
            newUserArry[0] = newUser
            return newUserArry
          })
      }else {
        return user
      }
    })
}

//=======================================
// DATE QUERIES
//=======================================

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
  return database('dates').insert(date).returning('id')
}

function patchDateDateID(date_id, date) {
  return database('dates').where('id', date_id).update(date)
}

function patchDatesEventID(event_id, date) {
  return database('dates').where('event_id', event_id).update(date)
}

function deleteDateDateID(date_id) {
  return database('dates').where('id', date_id).del()
}

function deleteDatesEventID(event_id) {
  return database('dates').where('event_id', event_id).del()
}


//=======================================
// EVENT_USERS QUERIES
//=======================================


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

function deleteEventsInviteesByEvent(event_id) {

}

function deleteEventsInviteesByUser(user_id) {

}
