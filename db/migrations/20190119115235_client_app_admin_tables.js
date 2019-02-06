
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tblSupervisors', t=>{
      t.increments()
      t.integer('client_sup_id')
      t.string('client_id')
      t.integer('district')
      t.integer('province')
      t.integer('tehsil')
      t.integer('uc')
      t.integer('site')
      t.string('sup_name', 50)
      t.string('sup_code', 10)
      t.integer('upload_status')
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
  })
    .createTable('tblLhw', t=>{
        t.increments()
        t.integer('client_lhw_id')
        t.string('client_id')
        t.integer('district')
        t.integer('province')
        t.integer('tehsil')
        t.integer('uc')
        t.integer('site')
        t.string('staff_name', 50)
        t.string('staff_code', 10)
        t.integer('upload_status')
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('tblVillages', t=>{
        t.increments()
        t.integer('client_village_id')
        t.string('client_id')
        t.integer('district')
        t.integer('province')
        t.integer('tehsil')
        t.integer('uc')
        t.integer('site')
        t.string('villageName', 50)
        t.integer('upload_status')
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('tblSupervisors')
        .dropTable('tblLhw')
        .dropTable('tblVillages')
};
