exports.up = function (knex, Promise) {
  return knex.schema.createTable('tblGeoProvince', (t) => {
      t.increments('id');
      t.string('provinceName').unique().notNullable();
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.boolean('isActive').defaultTo(true);
    })
    .createTable('tblGeoDistrict', (t) => {
      t.increments('id');
      t.string('districtName').unique().notNullable();
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.boolean('isActive').defaultTo(true);
      t.integer('province_id').references('id').inTable('tblGeoProvince')
    })
    .createTable('tblGeoTehsil', (t) => {
      t.increments('id');
      t.string('tehsilName').unique().notNullable();
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.boolean('isActive').defaultTo(true);
      t.integer('district_id').references('id').inTable('tblGeoDistrict')
    })
    .createTable('tblGeoUC', (t) => {
      t.increments('id');
      t.string('ucName').unique().notNullable();
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.boolean('isActive').defaultTo(true);
      t.integer('tehsil_id').references('id').inTable('tblGeoTehsil')
    })
    .createTable('tblGeoNutSite', (t) => {
      t.increments('id');
      t.string('siteName').unique().notNullable();
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.boolean('isActive').defaultTo(true);
      t.integer('province_id').references('id').inTable('tblGeoProvince');
      t.integer('district_id').references('id').inTable('tblGeoDistrict');
      t.integer('tehsil_id').references('id').inTable('tblGeoTehsil');
      t.integer('uc_id').references('id').inTable('tblGeoUC');
      t.boolean('OTP').notNullable().defaultTo(false);
      t.boolean('SFP').notNullable().defaultTo(false);
      t.boolean('SC').notNullable().defaultTo(false);

    })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tblGeoNutSite')
    .dropTable('tblGeoUC')
    .dropTable('tblGeoTehsil')
    .dropTable('tblGeoDistrict')
    .dropTable('tblGeoProvince');
};
exports.config = { transaction: false };