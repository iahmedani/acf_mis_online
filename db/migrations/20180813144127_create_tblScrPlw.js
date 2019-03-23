exports.up = function (knex, Promise) {
  return knex.schema.createTable('tblScrPlw', (t) => {
    t.increments('scr_plw_id');
    t.integer('client_scr_plw_id');
    t.string('client_id');
    t.unique(['client_scr_plw_id', 'client_id']);
    t.integer('site_id').references('id').inTable('tblGeoNutSite');
    t.string('username');
    t.string('project');
    t.integer('upload_status').defaultTo(1);
    t.boolean('is_deleted');
    t.date('screening_date');
    t.string('village');
    t.string('staff_name');
    t.string('staff_code');
    t.string('sup_name');
    t.string('sup_code');
    t.integer('total_scr_pragnent');
    t.integer('total_scr_lactating');
    t.integer('new_scr_pragnent');
    t.integer('new_scr_lactating');
    t.integer('reScreened_scr_pragnent');
    t.integer('reScreened_scr_lactating');
    t.integer('muac_gt_21_pragnent');
    t.integer('muac_gt_21_lactating');
    t.integer('muac_le_21_pragnent');
    t.integer('muac_le_21_lactating');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
    t.boolean('isActive').defaultTo(true);
    t.integer('approved');
    t.string('report_month',10);
    t.integer('ifa_first_time_pragnent');
    t.integer('ifa_first_time_lactating');
    t.integer('followup_pragnent');
    t.integer('followup_lactating');
    t.integer('exits_pragnent');
    t.integer('exit_lactating');
    t.date('upload_date')
    t.integer('uc_id');

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tblScrPlw');
};
exports.config = { transaction: false };