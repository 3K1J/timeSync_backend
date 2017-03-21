
exports.up = function(knex) {
  return knex.schema.createTable('dates_users', table=>{
    table.integer('date_id').references('dates.id').onDelete('cascade')
    table.integer('user_id').references('users.id').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dates_users')
};
