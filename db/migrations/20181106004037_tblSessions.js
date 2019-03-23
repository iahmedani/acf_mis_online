
exports.up = function(knex, Promise) {
	return knex.schema.createTable('tblSessions', t=>{
		t.increments();
		t.integer('site_id');
		t.integer('client_session_id');
		t.string('client_id');
		t.date('session_date');
		t.string('session_type');
		t.integer('male_participants')
		t.integer('female_participants')
		t.string('session_location')
		t.integer('upload_status')
		t.timestamp('created_at').defaultTo(knex.fn.now());
		t.timestamp('updated_at').defaultTo(knex.fn.now());
		t.integer('old_participants')
		t.integer('new_participants')
		t.string('username')
		t.string('org_name')
		t.string('project_name')
		t.integer('pragnent')
		t.integer('lactating')
		t.string('remarks')
		t.integer('CHS_id')
		t.integer('CHW_id')
		t.boolean('is_deleted').defaultTo(false);
		t.date('upload_date')
		t.string('prog_type', 10)
		t.integer('total_session').defaultTo(0)
		t.integer('ind_session').defaultTo(0)
		t.integer('grp_sessions').defaultTo(0)
		t.integer('uc_id');

	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tblSessions');
}
