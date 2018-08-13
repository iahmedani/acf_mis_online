exports.up = function (knex, Promise) {
  return knex.schema.createTable('tblScrChildren', (t) => {
    t.increments('scr_plw_id');
    t.integer('client_scr_plw_id');
    t.integer('client_id');
    t.primary(['client_scr_plw_id', 'client_id']);
    t.integer('site_id').references('id').inTable('tblGeoNutSite');
    t.string('username');
    t.string('project');
    t.integer('upload_status');
    t.boolean('is_deleted');
    t.date('screening_date');
    t.string('village');
    t.string('staff_name');
    t.string('staff_code');
    t.string('sup_name');
    t.string('sup_code');
    t.string('total_scr_pragnent');
    t.string('total_scr_lactating');
    t.string('new_scr_pragnent');
    t.string('new_scr_lactating');
    t.string('ifa_tabs_rec_pragnent');
    t.string('ifa_tabs_rec_lactating');
    t.string('muac_gt_21_pragnent');
    t.string('muac_gt_21_lactating');
    t.string('muac_le_21_pragnent');
    t.string('muac_le_21_lactating');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
    t.boolean('isActive').defaultTo(true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tblScrChildren');
};