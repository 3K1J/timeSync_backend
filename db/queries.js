const database = require('./knex.js')

module.exports = {
  verifyOrAddUser,
  getAllDates,
  getDates,
  getDate,
  postDate
}

function verifyOrAddUser(profile) {
  return database('users').select('*').where('email', profile.user.email)
    .then(user =>{
      if (user.length < 1) {
        var newUser = {}
        newUser.name = profile.displayName
        newUser.email = profile.user.email
        database("users").insert(newUser)
          .then(()=>profile)
      }else {
        return profile
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
