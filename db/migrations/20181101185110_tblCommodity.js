
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tblCommodity', t=>{
      t.increments('id');
      t.string('item_name');
      t.string('item_desc');
      t.string('item_unit');
      t.string('item_sub_unit');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tblCommodity')
};
