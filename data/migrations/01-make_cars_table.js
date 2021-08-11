exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.text('vin', 256).unique().notNullable()
    tbl.text('make', 256).notNullable()
    tbl.text('model', 256).notNullable()
    tbl.float('mileage').notNullable()
    tbl.text('title', 256)
    tbl.text('transmission', 256)
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};
