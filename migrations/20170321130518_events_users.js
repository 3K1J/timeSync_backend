
exports.up = function(knex) {
  return knex.schema.createTable('events_users', table=>{
    table.integer('event_id').references('events.id').onDelete('cascade')
    table.integer('user_id').references('users.id').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events_users')
};
