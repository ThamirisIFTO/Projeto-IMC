exports.up = function(knex) {
    return knex.schema.createTable("medicoes", (table) => {
       table.increments().primary();
        table.string("nome");
        table.decimal("altura");
        table.decimal("peso");
        table.timestamps(true, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable("medicoes");
};
