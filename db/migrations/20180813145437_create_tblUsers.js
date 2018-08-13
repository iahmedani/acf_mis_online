exports.up = function (knex, Promise) {
  return knex.schema.createTable('tblUsers', (t) => {
    t.increments('user_id').primary();
    t.string('first_name', 50);
    t.string('last_name', 50);
    t.string('email').unique();
    t.string('organization');
    t.string('unit');
    t.string('auth_type');
    t.boolean('isCp');
    t.string('created_by');
    t.string('updated_by');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
    t.boolean('isActive').defaultTo(true);
    t.boolean('isDelete').defaultTo(false);
    t.boolean('isModified').defaultTo(false);
    t.string('password');
    t.string('project');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tblUsers')
};