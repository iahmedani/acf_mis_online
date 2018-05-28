require('dotenv').config();
var knex = require('knex')({
  client: 'mssql',
  connection: {
    host : process.env.RDS_HOSTNAME,
    user : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    database : process.env.DB_DATABASE,
    port:process.env.RDS_PASSWORD
  }
});

 // create tblGeoProvince
 knex.schema.hasTable('tblGeoProvince').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('tblGeoProvince', function (table) {
      table.increments();
      table.string('provinceName');
      table.timestamps();
    });
  }
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// create tblGeoDistrict
knex.schema.hasTable('tblGeoDistrict').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('tblGeoDistrict', function (table) {
      table.increments();
      table.string('districtName');
      table.integer('province_id');
      table.timestamps();
    });
  }
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// create tblGeoTehsil
knex.schema.hasTable('tblGeoTehsil').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('tblGeoTehsil', function (table) {
      table.increments();
      table.string('tehsilName');
      table.integer('district_id');
      table.timestamps();
    });
  }
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// create tblGeoUC
knex.schema.hasTable('tblGeoUC').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('tblGeoUC', function (table) {
      table.increments();
      table.string('ucName');
      table.integer('tehsil_id');
      table.timestamps();
    });
  }
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// create tblGeoNutSite
knex.schema.hasTable('tblGeoNutSite').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('tblGeoNutSite', function (table) {
      table.increments();
      table.string('siteName');
      table.integer('province_id');
      table.integer('district_id');
      table.integer('tehsil_id');
      table.integer('uc_id');
      table.integer('OTP');
      table.integer('SFP');
      table.integer('SC');
      table.timestamps();
    });
  }
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// create tblDemo
knex.schema.hasTable('tblDemo').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('tblDemo', function (table) {
      table.increments();
      table.string('yourName');
      table.integer('client_id');      
    });
  }
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});


knex.schema.hasTable('Screening').then(function(exists){
  if (!exists){
    return knex.schema.createTable('Screening', function(table){
      table.increments('screening_id').primary();
      table.unique('client_scr_id', 'client_scr_id');
      table.integer('client_scr_id');
      table.integer('client_id');
      table.integer('screening_type');
      table.dateTime('screening_date');
      table.dateTime('data_entry_date');
      table.integer('site_id');
      table.string('site_village');
      table.string('staff_name');
      table.string('name');
      table.string('f_or_h_name');
      table.string('address');
      table.integer('age');
      table.integer('gender');
      table.integer('muac');
      table.integer('oedema');
      table.integer('no_mm_sch');
      table.integer('deworming');
      table.integer('status');
      table.boolean('is_plw');
      table.integer('plw_type');
      table.integer('no_mm_tabs');
      table.timestamps();
    });
  }
})
.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

knex.schema.hasTable('sessions').then(function(exists){
  if (!exists){
    return knex.raw(`CREATE TABLE [dbo].[sessions](
      [sid] [varchar](255) NOT NULL PRIMARY KEY,
      [session] [varchar](max) NOT NULL,
      [expires] [datetime] NOT NULL
    )`)
  }
})
.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

knex.schema.hasTable('Users').then(function(exists){
  if (!exists){
    return knex.schema.createTable('Users', function(table){
      table.increments('user_id').primary();
      table.unique('email');
      table.string('f_name', 100).notNullable();
      table.string('l_name', 100).notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('org', 100);
      table.boolean('active').defaultTo(true);
      table.integer('role');
      table.json('rights');
    });
  }
})
.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
