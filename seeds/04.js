
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events_users').del()
    .then(function () {
      return knex('events_users').insert([
        {event_id: knex('events').where('title', 'Breakfast').select('id'),
        user_id: knex('users').where('name', 'Paul Torres').select('id')},

        {event_id: knex('events').where('title', 'Breakfast').select('id'),
        user_id: knex('users').where('name', 'Brad Folkers').select('id')},

        {event_id: knex('events').where('title', 'Breakfast').select('id'),
        user_id: knex('users').where('name', 'Bill Boughton').select('id')},

        {event_id: knex('events').where('title', 'Lunch').select('id'),
        user_id: knex('users').where('name', 'Paul Torres').select('id')},

        {event_id: knex('events').where('title', 'Lunch').select('id'),
        user_id: knex('users').where('name', 'Brad Folkers').select('id')},

        {event_id: knex('events').where('title', 'Lunch').select('id'),
        user_id: knex('users').where('name', 'Bill Boughton').select('id')},

        {event_id: knex('events').where('title', 'Dinner').select('id'),
        user_id: knex('users').where('name', 'Paul Torres').select('id')},

        {event_id: knex('events').where('title', 'Dinner').select('id'),
        user_id: knex('users').where('name', 'Brad Folkers').select('id')},

        {event_id: knex('events').where('title', 'Dinner').select('id'),
        user_id: knex('users').where('name', 'Bill Boughton').select('id')},

        {event_id: knex('events').where('title', 'Dessert').select('id'),
        user_id: knex('users').where('name', 'Paul Torres').select('id')},

        {event_id: knex('events').where('title', 'Dessert').select('id'),
        user_id: knex('users').where('name', 'Brad Folkers').select('id')},

        {event_id: knex('events').where('title', 'Dessert').select('id'),
        user_id: knex('users').where('name', 'Bill Boughton').select('id')}
      ]);
    });
};
