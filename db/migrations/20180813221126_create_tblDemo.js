
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tblDemo', t=>{
      t.increments();
      t.integer('imran');
      t.integer('kamran');
      t.unique(['imran','kamran']);
      t.timestamps();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tblDemo')
};
