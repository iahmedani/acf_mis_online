exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("tblCountry", t => {
      t.increments("country_id");
      t.string("country_code");
      t.timestamps();
    })
    .createTable("tblBase", t => {
      t.increments("base_id");
      t.string("base_code");
      t.timestamps();
    })
    .createTable("tblDept", t => {
      t.increments("dept_id");
      t.string("dept_code");
      t.timestamps();
    })
    .createTable("tblProcurement", t => {
      t.increments("proc_id");
      t.string("proc_num");
      t.string("proc_line");
      t.date("proc_date");
      t.timestamps();
    })
    .createTable("tblProject", t => {
      t.increments("proj_id");
      t.string("proj_code");
      t.string("proj_desc");
      t.timestamps();
    })
    .createTable("tblLogCat", t => {
      t.increments("logCat_id");
      t.string("category");
      t.timestamps();
    })
    .createTable("tblItem", t => {
      t.increments("item_id");
      t.integer("logCat_id_fk")
        .references("logCat_id")
        .inTable("tblLogCat");
      t.string("item_name");
      t.string("primary_pack");
      t.string("sub_pack");
      t.string("unit");
      t.timestamps();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("tblItem")
    .dropTable("tblLogCat")
    .dropTable("tblProject")
    .dropTable("tblProcurement")
    .dropTable("tblDept")
    .dropTable("tblCountry")
    .dropTable("tblBase");
};
