
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {title: 'Breakfast', body: 'Nate will go get us food',
        user_id: knex('users').where('name', 'Nick Sugar').select('id')
        },
        {title: 'Lunch', body: 'Nate will go get us food again!',
        user_id: knex('users').where('name', 'Ryan Phillips').select('id')
        },
        {title: 'Dinner', body: 'Nate will go get us food again agian!!',
        user_id: knex('users').where('name', 'Tommy Krepp').select('id')
        },
        {title: 'Dessert', body: 'Nate will go get us food again again again!!!',
        user_id: knex('users').where('name', 'Nathan Edlen').select('id')
        },
      ]);
    });
};
