
exports.up = function(knex) {
  return knex.schema.createTable('events', table=>{
    table.increments()
    table.string('title')
    table.text('body')
    table.integer('user_id').references('users.id').onDelete('cascade')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events')
}
