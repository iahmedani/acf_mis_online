exports.up = function (knex, Promise) {
  return knex.schema.raw(`CREATE TABLE [dbo].[sessions](
    [sid] [varchar](255) NOT NULL,
    [session] [varchar](max) NOT NULL,
    [expires] [datetime] NOT NULL
  ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]`)
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('sessions')
};