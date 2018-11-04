
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tblStockReuest',t => {
    t.increments();
    t.uuid('req_id');
    t.date('req_date');
    t.string('req_district');
    t.string('req_email');
    t.string('req_sender');
    t.text('req_data');
    t.string('client_id');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.string('remarks');
    t.integer('upload_status').defaultTo(1);    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tblStockReuest');
};
