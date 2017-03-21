
exports.up = function(knex) {
  return knex.schema.createTable('dates', table=>{
    table.increments()
    table.string('date')
    table.string('start')
    table.string('end')
    table.integer('event_id').references('events.id').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dates')
};
