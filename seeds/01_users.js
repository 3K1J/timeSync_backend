
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Nick Sugar', email: 'mailsugar@yahoo.com'},
        {name: 'Ryan Phillips', email: 'rphillips4417@gmail.com'},
        {name: 'Tommy Krepp', email: 'tommykrepp@aol.com'},
        {name: 'Nathan Edlen', email: 'nathan.edlen@gmail.com'},
        {name: 'Bill Boughton'},
        {name: 'Brad Folkers'},
        {name: 'Paul Torres'}
      ]);
    });
};
