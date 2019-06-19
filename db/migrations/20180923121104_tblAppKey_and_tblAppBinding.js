
exports.up = function(knex, Promise) {
  return knex.schema.raw(
    `CREATE TABLE  tblAppKey (
      id int IDENTITY(1,1) PRIMARY KEY,
      name varchar(255) NOT NULL,
      organization varchar(255) NOT NULL,
      email varchar(244) NOT NULL,
      project varchar(150) NOT NULL,
      [key] uniqueidentifier NOT NULL DEFAULT newid(),
      created_at date NOT NULL DEFAULT GETDATE(),
      status bit NOT NULL DEFAULT 0,
      CONSTRAINT UC_AppKey UNIQUE (email) 
    )`
  ).createTable('tblAppBinding', t => {
    t.increments('id');
    t.string('mac');
    t.uuid('regKey');
    t.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tblAppKey').dropTable('tblAppBinding')
};
exports.config = { transaction: false };