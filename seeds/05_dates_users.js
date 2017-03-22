
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dates_users').del()
    .then(function () {
      return knex('dates_users').insert([
        {date_id: knex('dates').where('date', 'March 21st 2017').select('id'),
        user_id: knex('users').where('name', 'Paul Torres').select('id')},

        {date_id: knex('dates').where('date', 'March 21st 2017').select('id'),
        user_id: knex('users').where('name', 'Ryan Phillips').select('id')},

        {date_id: knex('dates').where('date', 'March 21st 2017').select('id'),
        user_id: knex('users').where('name', 'Bill Boughton').select('id')},

        {date_id: knex('dates').where('date', 'March 21st 2017').select('id'),
        user_id: knex('users').where('name', 'Brad Folkers').select('id')}
      ]);
    });
};
