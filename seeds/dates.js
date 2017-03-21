
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dates').del()
    .then(function () {
      // Inserts seed entries
      return knex('dates').insert([
        {date: 'March 21st 2017',
        start: '07:30:00 am',
        end: '08:00:00 am',
        event_id: knex('events').where('title', 'Breakfast').select('id')},

        {date: 'May 11th 2017',
        start: '11:30:00 am',
        end: '12:00:00 pm',
        event_id: knex('events').where('title', 'Lunch').select('id')},

        {date: 'October 2nd 2018',
        start: '05:30:00 pm',
        end: '06:00:00 pm',
        event_id: knex('events').where('title', 'Dinner').select('id')},

        {date: 'July 4th 2019',
        start: '07:30:00 pm',
        end: '08:00:00 pm',
        event_id: knex('events').where('title', 'Dessert').select('id')}
      ]);
    });
};
