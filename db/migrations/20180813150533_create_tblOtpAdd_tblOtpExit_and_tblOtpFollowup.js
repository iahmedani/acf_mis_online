exports.up = function (knex, Promise) {
  return knex.schema.createTable('tblOtpAdd', (t) => {
      t.increments('otp_id');
      t.integer('client_otp_id');
      t.string('client_id');
      t.unique(['client_otp_id', 'client_id']);
      t.integer('site_id').references('id').inTable('tblGeoNutSite');
      t.string('site_village');
      t.date('reg_date');
      t.string('reg_id');
      t.string('p_name');
      t.string('f_or_h_name');
      t.string('cnic', 15);
      t.string('address');
      t.string('cnt_number',12);
      t.integer('age');
      t.string('gender');
      t.string('plw_type');
      t.string('ent_reason');
      t.string('ref_type');
      t.string('oedema');
      t.decimal('muac');
      t.boolean('diarrhoea');
      t.boolean('vomiting');
      t.boolean('cough');
      t.string('appetite');
      t.string('daily_stool');
      t.boolean('pass_urine');
      t.boolean('b_Feeding');
      t.decimal('weight');
      t.decimal('height');
      t.string('ration1');
      t.integer('quantity1');
      t.string('ration2');
      t.integer('quantity2');
      t.string('ration3');
      t.integer('quantity3');
      t.string('prog_type');
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.integer('upload_status').defaultTo(1);
      t.string('username');
      t.string('project_name');
      t.string('org_name');
      t.boolean('is_deleted').notNullable().defaultTo(false);
      t.string('other_com_name');
      t.decimal('other_com_qty').defaultTo(0);
      t.string('nsc_old_otp_id').defaultTo('0');
      t.string('ref_type_other');
      t.string('entry_reason_other');
      t.integer('travel_time_minutes').notNullable().defaultTo(0);
      t.string('is_mother_alive', 3).notNullable().defaultTo('Yes');
      t.integer('tehsil_id');
      t.string('nsc_otp_id');
    t.date('upload_date')

    })
    .createTable('tblOtpExit', (t) => {
      t.increments('exit_id');
      t.integer('client_otp_id');
      t.string('client_id');
      t.unique(['client_otp_id', 'client_id']);
      t.integer('exit_muac');
      t.integer('exit_weight');
      t.integer('exit_height');
      t.string('exit_ration1');
      t.integer('exit_quantity1');
      t.string('exit_ration2');
      t.integer('exit_quantity2');
      t.string('exit_ration3');
      t.integer('exit_quantity3');
      t.string('exit_prog_type');
      t.date('exit_date');
      t.string('exit_reason');
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.integer('upload_status').defaultTo(1);
      t.integer('client_exit_id');
      t.integer('weight_gain');
      t.integer('days_in_program');
      t.boolean('is_deleted').notNullable().defaultTo(false);
      t.string('exit_other_com_name');
      t.decimal('exit_other_com_qty');
    t.date('upload_date')

    })
    .createTable('tblOtpFollowup', (t) => {
      t.increments('followup_id');
      t.integer('client_followup_id');
      t.integer('client_otp_id');
      t.string('client_id');
      t.unique(['client_followup_id', 'client_id']);
      t.decimal('weight');
      t.decimal('height');
      t.string('ration1');
      t.integer('quantity1');
      t.string('ration2');
      t.integer('quantity2');
      t.string('ration3');
      t.integer('quantity3');
      t.string('prog_type');
      t.date('curr_date').defaultTo(knex.fn.now());
      t.string('status');
      t.date('next_followup');
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.integer('muac');
      t.integer('upload_status').defaultTo(1);
      t.boolean('is_deleted').notNullable().defaultTo(false);
      t.string('other_com_name', 20);
      t.decimal('other_com_qty').defaultTo(0);
    t.date('upload_date')

    })

};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('tblOtpFollowup')
    .dropTable('tblOtpExit')
    .dropTable('tblOtpAdd');
};
exports.config = { transaction: false };