const database = require('./knex.js')

module.exports = {
  verifyOrAddUser
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

function getDates(event_ID) {
  return database("dates").select("*").where("event_ID", event_ID)
}
