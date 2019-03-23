
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tblStock',t => {
      t.increments();
      t.string('dn_number')
      t.date('dn_date')
      t.string('item_name')
      t.string('item_desc')
      t.integer('disp_qty')
      t.string('disp_unit')
      t.string('disp_sub_unit')
      t.integer('rec_qty')
      t.string('rec_obs')
      t.decimal('lost_and_damage').notNullable().defaultTo(0)
      t.date('expiry_date');
      t.string('client_id');
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.integer('upload_status').defaultTo(1);    
      t.integer('client_stockIn_id');
    t.date('upload_date');

    })
    .createTable('tblSiteStock', t =>{
        t.increments();
        t.integer('client_stock_out_id');
        t.string('client_id');
        t.string('program_type', 10);
        t.integer('item_id');
        t.string('item_name');
        t.date('stock_release_date')
        t.decimal('quantity_released')
        t.integer('district_id')
        t.integer('tehsil_id');
        t.integer('site_id');
        t.integer('CHW_id');
        t.integer('CHS_id');
        t.boolean('is_deleted');
        t.integer('upload_status').defaultTo(1);    
        t.date('created_at').defaultTo(knex.fn.now());
        t.date('updated_at').defaultTo(knex.fn.now());
        t.string('stockOutID')
    t.date('upload_date');
    t.integer('uc_id');


    })
    .createTable('tblStokDistv2', t=>{
        t.increments();
        t.integer('client_dist_id');
        t.string('client_id');
        t.string('program_type',10);
        t.string('item_name', 50)
        t.integer('item_id')
        t.decimal('opening')
        t.decimal('received')
        t.decimal('distributed')
        t.decimal('remaining')
        t.integer('district_id')
        t.integer('tehsil_id')
        t.integer('site_id')
        t.integer('CHW_id')
        t.integer('CHS_id')
        t.boolean('is_deleted')
        t.integer('upload_status').defaultTo(1);
        // t.timestamp('created_at').defaultTo(knex.fn.now());
        // t.timestamp('updated_at').defaultTo(knex.fn.now());
        t.date('created_at')
        t.date('updated_at')
        t.string('stockDistId')
        t.decimal('damaged')
        t.string('dist_month', 10)
        t.integer('province_id')
        t.integer('uc_id')
    t.date('upload_date')

    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('tblStock')
    .dropTable('tblSiteStock')
    .dropTable('tblStokDistv2');
  };
  