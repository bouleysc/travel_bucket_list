
exports.up = function(knex, Promise) {
  return knex.schema.createTable('place', (table) => {
    table.increments();
    table.text('city').notNullable();
    table.text('state').notNullable();
    table.integer('rating');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('place');
};
