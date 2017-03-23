
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dates').del()
    .then(function () {
      // Inserts seed entries
      return knex('dates').insert([
        {date: 'March 1st 2017',
        start: '07:30:00 am',
        end: '08:00:00 am',
        event_id: knex('events').where('title', 'Breakfast').select('id')},

        {date: 'March 27st 2017',
        start: '07:30:00 am',
        end: '08:00:00 am',
        event_id: knex('events').where('title', 'Breakfast').select('id')},

        {date: 'March 8st 2017',
        start: '07:30:00 am',
        end: '08:00:00 am',
        event_id: knex('events').where('title', 'Breakfast').select('id')},

        {date: 'March 15st 2017',
        start: '07:30:00 am',
        end: '08:00:00 am',
        event_id: knex('events').where('title', 'Breakfast').select('id')},

        {date: 'Jul 1th 2017',
        start: '11:30:00 am',
        end: '12:00:00 pm',
        event_id: knex('events').where('title', 'Lunch').select('id')},

        {date: 'Jul 12th 2017',
        start: '11:30:00 am',
        end: '12:00:00 pm',
        event_id: knex('events').where('title', 'Lunch').select('id')},

        {date: 'Jul 31th 2017',
        start: '11:30:00 am',
        end: '12:00:00 pm',
        event_id: knex('events').where('title', 'Lunch').select('id')},

        {date: 'Jul 20th 2017',
        start: '11:30:00 am',
        end: '12:00:00 pm',
        event_id: knex('events').where('title', 'Lunch').select('id')},

        {date: 'October 2nd 2018',
        start: '05:30:00 pm',
        end: '06:00:00 pm',
        event_id: knex('events').where('title', 'Dinner').select('id')},

        {date: 'October 2nd 2018',
        start: '05:30:00 pm',
        end: '06:00:00 pm',
        event_id: knex('events').where('title', 'Dinner').select('id')},

        {date: 'October 2nd 2018',
        start: '05:30:00 pm',
        end: '06:00:00 pm',
        event_id: knex('events').where('title', 'Dinner').select('id')},

        {date: 'Dec 4th 2019',
        start: '07:30:00 pm',
        end: '08:00:00 pm',
        event_id: knex('events').where('title', 'Dessert').select('id')},

        {date: 'Jan 4th 2019',
        start: '07:30:00 pm',
        end: '08:00:00 pm',
        event_id: knex('events').where('title', 'Dessert').select('id')},

        {date: 'Mar 4th 2019',
        start: '07:30:00 pm',
        end: '08:00:00 pm',
        event_id: knex('events').where('title', 'Dessert').select('id')},

        {date: 'Oct 4th 2019',
        start: '07:30:00 pm',
        end: '08:00:00 pm',
        event_id: knex('events').where('title', 'Dessert').select('id')},

        {date: 'Oct 4th 2019',
        start: '07:30:00 pm',
        end: '08:00:00 pm',
        event_id: knex('events').where('title', 'Dessert').select('id')}
      ]);
    });
};
