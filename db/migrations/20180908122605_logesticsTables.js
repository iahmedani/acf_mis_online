exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("tblLogIn", t => {
      t.increments("stockIn_id");
      t.string("country_code");
      t.string("base_code");
      t.string("dept_code");
      t.string("proc_req");
      t.string("proc_line");
      t.string("proj_code");
      t.string("pr_date");
      t.string("cat");
      t.string("item_desc");
      t.date("req_del_date");
      t.string("del_loc");
      t.integer("in_qty");
      t.string("unit");
      t.integer("unit_price");
      t.string("cur");
      t.string("warehouse");
      t.date("exp_date");
      t.string("sub_pckg");
      t.string("sub_pckg_unit");
      t.string("remarks");
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.timestamp("update_at");
      t.string("created_by");
      t.string("update_by");
      t.string("validate_by");
    })
    .createTable("tblDelnote", t => {
      t.increments("delNote_id");
      t.date("del_date");
      t.string("delNote_ref_num");
      t.string("sro_ref_num");
      t.string("shipper_name");
      t.string("shipper_address");
      t.string("shipper_phone");
      t.string("consg_name");
      t.string("consg_position");
      t.string("consg_address");
      t.string("consg_phone");
      t.string("trans_name");
      t.string("trans_address");
      t.string("trans_phone");
      t.string("trans_reg_num");
      t.date("trans_date");
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.timestamp("update_at");
      t.string("created_by");
      t.string("update_by");
      t.string("validate_by");
      t.string("remarks");
      t.uuid("uploadFileName");
    })
    .createTable("tblStockOut", t => {
      t.increments("stockOut_id");
      t.integer("delNote_id_fk")
        .references("delNote_id")
        .inTable("tblDelnote");
      t.integer("stockIn_id_fk")
        .references("stockIn_id")
        .inTable("tblLogIn");
      t.integer("out_qty");
      t.string("out_unit");
      t.integer("qty_delivered");
      t.string("obs_delivered");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("tblStockOut")
    .dropTable("tblDelnote")
    .dropTable("tblLogIn");
};
