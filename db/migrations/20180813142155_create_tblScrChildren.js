exports.up = function (knex, Promise) {
  return knex.schema.createTable('tblScrChildren', (t) => {
    t.increments('scr_ch_id');
    t.integer('client_scr_ch_id');
    t.integer('client_id');
    t.unique(['client_scr_ch_id', 'client_id']);
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
    t.integer('total_scr_girls');
    t.integer('total_scr_boys');
    t.integer('sam_without_comp_girls_623');
    t.integer('sam_without_comp_boys_623');
    t.integer('sam_without_comp_girls_2459');
    t.integer('sam_without_comp_boys_2459');
    t.integer('sam_with_comp_girls_623');
    t.integer('sam_with_comp_boys_623');
    t.integer('sam_with_comp_girls_2459');
    t.integer('sam_with_comp_boys_2459');
    t.integer('mam_boys_623');
    t.integer('mam_gils_623');
    t.integer('mam_boys_2459');
    t.integer('mam_gils_2459');
    t.integer('reffer_tsfp_girls');
    t.integer('reffer_tsfp_boys');
    t.integer('reffer_otp_girls');
    t.integer('reffer_otp_boys');
    t.integer('normal_girls_623');
    t.integer('normal_boys_623');
    t.integer('normal_girls_2459');
    t.integer('normal_boys_2459');
    t.integer('new_girls');
    t.integer('new_boys');
    t.integer('reScreened_girls');
    t.integer('reScreened_boys');
    t.integer('first_mnp_30_girls');
    t.integer('first_mnp_30_boys');
    t.integer('second_mnp_30_girls');
    t.integer('second_mnp_30_boys');
    t.integer('third_mnp_30_girls');
    t.integer('third_mnp_30_boys');
    t.integer('fourth_mnp_30_girls');
    t.integer('fourth_mnp_30_boys');
    t.integer('fifth_mnp_30_girls');
    t.integer('fifth_mnp_30_boys');
    t.integer('sixth_mnp_30_girls');
    t.integer('sixth_mnp_30_boys');
    t.integer('deworming_girls');
    t.integer('deworming_boys');
    t.integer('no_oedema_girls');
    t.integer('no_oedema_boys');
    t.integer('plus12_oedema_girls');
    t.integer('plus12_oedema_boys');
    t.integer('plus3_oedema_girls');
    t.integer('plus3_oedema_boys');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
    t.boolean('isActive').defaultTo(true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tblScrChildren');
};