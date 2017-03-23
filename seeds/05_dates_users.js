
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dates_users').del()
    .then(function () {
      return knex('dates_users').insert([
        {date_id: knex('dates').where('date', 'March 1st 2017').select('id'),
        user_id: knex('users').where('name', 'Paul').select('id')},

        {date_id: knex('dates').where('date', 'March 1st 2017').select('id'),
        user_id: knex('users').where('name', 'Brad').select('id')},

        {date_id: knex('dates').where('date', 'March 1st 2017').select('id'),
        user_id: knex('users').where('name', 'Bill').select('id')},




        {date_id: knex('dates').where('date', 'March 27st 2017').select('id'),
        user_id: knex('users').where('name', 'Paul V').select('id')},





        {date_id: knex('dates').where('date', 'March 1st 2017').select('id'),
        user_id: knex('users').where('name', 'Jim John').select('id')},

        {date_id: knex('dates').where('date', 'March 8st 2017').select('id'),
        user_id: knex('users').where('name', 'Koa To').select('id')},

        {date_id: knex('dates').where('date', 'March 8st 2017').select('id'),
        user_id: knex('users').where('name', 'Jake').select('id')},




        {date_id: knex('dates').where('date', 'March 15st 2017').select('id'),
        user_id: knex('users').where('name', 'Peter').select('id')},

        {date_id: knex('dates').where('date', 'March 15st 2017').select('id'),
        user_id: knex('users').where('name', 'Peter Guy').select('id')},

        {date_id: knex('dates').where('date', 'March 15st 2017').select('id'),
        user_id: knex('users').where('name', 'Bob Torres').select('id')}
      ]);
    });
};
