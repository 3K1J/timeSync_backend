
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dates').del()
    .then(function () {
      // Inserts seed entries
      return knex('dates').insert([
        {start: 'March 21st 2017, 07:30:00 am', end: 'March 21st 2017, 08:00:00 am',
        event_id: knex('events').where('title', 'Breakfast').select('id')},
        {start: 'March 21st 2017, 11:30:00 am', end: 'March 21st 2017, 12:00:00 pm',
        event_id: knex('events').where('title', 'Lunch').select('id')},
        {start: 'March 21st 2017, 05:30:00 pm', end: 'March 21st 2017, 06:00:00 pm',
        event_id: knex('events').where('title', 'Dinner').select('id')},
        {start: 'March 21st 2017, 07:30:00 pm', end: 'March 21st 2017, 08:00:00 pm',
        event_id: knex('events').where('title', 'Dessert').select('id')}
      ]);
    });
};
