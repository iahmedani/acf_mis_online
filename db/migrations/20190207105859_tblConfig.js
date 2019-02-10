
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tblConfig', t=>{
      t.string('description', 255);
      t.string('value', 255);

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tblConfig')
};
