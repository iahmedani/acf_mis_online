require('dotenv').config();
var knex = require('knex')({
    client: 'mssql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password :  process.env.DB_PASS,
      database : process.env.DB_DATABASE
    }
  });

  /**
   * CREATE TABLE [tblScrChildren](
  [ch_scr_id] INTEGER PRIMARY KEY AUTOINCREMENT, 
  [site_id] INTEGER, 
  [screening_date] DATE, 
  [created_at] DATE, 
  [village] VARCHAR(50), 
  [staff_name] VARCHAR(50), 
  [staff_code] VARCHAR(10),
  [sup_name] VARCHAR(50), 
  [sup_code] VARCHAR(10), 
  [total_scr_girls] INTEGER, 
  [total_scr_boys] INTEGER, 
  [sam_without_comp_girls_623] INTEGER, 
  [sam_without_comp_boys_623] INTEGER, 
  [sam_with_comp_girls_623] INTEGER, 
  [sam_with_comp_boys_623] INTEGER, 
  [mam_girls_623] INTEGER, 
  [mam_boys_623] INTEGER, 
  [sam_without_comp_girls_2459] INTEGER, 
  [sam_without_comp_boys_2459] INTEGER, 
  [sam_with_comp_girls_2459] INTEGER, 
  [sam_with_comp_boys_2459] INTEGER, 
  [mam_girls_2459] INTEGER, 
  [mam_boys_2459] INTEGER, 
  [reffer_tsfp_girls] INTEGER, 
  [reffer_otp_girls] INTEGER, 
  [reffer_tsfp_boys] INTEGER, 
  [reffer_otp_boys] INTEGER, 
  [reffer_sc_girls] inteGER, 
  [reffer_sc_boys] integer, 
  [normal_boys_623] INTEGER, 
  [normal_girls_623] INTEGER, 
  [normal_boys_2459] INTEGER, 
  [normal_girls_2459] INTEGER, 
  [mnp_30_girls] INTEGER, 
  [mnp_30_boys] INTEGER,
  [deworming_girls] INTEGER, 
  [deworming_boys] INTEGER, 
  [new_boys] INTEGER, 
  [new_girls] INTEGER, 
  [no_oedema_girls] INTEGER, 
  [no_oedema_boys] INTEGER, 
  [plus12_oedema_girls] INTEGER, 
  [plus12_oedema_boys] INTEGER, 
  [plus3_oedema_girls] INTEGER, 
  [plus3_oedema_boys] INTEGER, 
  [client_id] INTEGER, 
  [username] VARCHAR, 
  [project] VARCHAR, 
  [upload_status] INTEGER, 
  [approved] INTEGER, 
  [is_deleted] INTEGER);
   * 
   */

knex.schema.hasTable('tblScrChildren').then(exists=>{
  if(!exists){
    return knex.schema.createTableIfNotExists('tblScrChildren', (t)=>{
      t.increments('scr_ch_id');
      t.integer('client_scr_ch_id');
      t.integer('client_id');
      t.string('username',50);
      t.string('project');
      t.integer('upload_status');
      t.integer('approved');
      t.integer('is_deleted');
      t.date('screening_date');
      t.string('village', 50);
      t.string('staff_name',50);
      t.string('staff_code',20);
      t.integer('total_scr_girls');
      t.integer('total_scr_boys');
      t.integer('sam_without_comp_girls_623');
      t.integer('sam_without_comp_boys_623');
      t.integer('sam_with_comp_girls_623');
      t.integer('sam_with_comp_boys_623');
      t.integer('mam_girls_623');
      t.integer('mam_boys_623');
      t.integer('sam_without_comp_girls_2459');
      t.integer('sam_without_comp_boys_2459');
      t.integer('mam_girls_2459');
      t.integer('mam_boys_2459');
      t.integer('reffer_tsfp_girls');
      t.integer('reffer_otp_girls');
      t.integer('reffer_tsfp_boys');
      t.integer('reffer_otp_boys');
      t.integer('reffer_sc_girls');
      t.integer('reffer_sc_boys');
      t.integer('normal_boys_623');
      t.integer('normal_girls_623');
      t.integer('normal_boys_2459');
      t.integer('normal_girls_2459');
      t.integer('mnp_30_girls');
      t.integer('mnp_30_boys');
      t.integer('deworming_girls');
      t.integer('deworming_boys');
      t.integer('new_boys');
      t.integer('new_girls');
      t.integer('no_oedema_girls');
      t.integer('no_oedema_boys');
      t.integer('plus12_oedema_girls');
      t.integer('plus12_oedema_boys');
      t.integer('plus3_oedema_girls');
      t.integer('plus3_oedema_boys');
      t.timestamps();
     })
  } else {
    return 'table tblScrChildren already exists'
  }
}).then(r=>console.log(r)).catch(e=>console.log(e));


knex.schema.hasTable('tblScrPlw').then(exists=>{
  if(!exists){
    return knex.schema.createTableIfNotExists('tblScrPlw', (t)=>{
      t.increments('scr_ch_id');
      t.integer('client_scr_ch_id');
      t.integer('client_id');
      t.string('username',50);
      t.string('project');
      t.integer('upload_status');
      t.integer('approved');
      t.integer('is_deleted');
      t.date('screening_date');
      t.string('village', 50);
      t.string('staff_name',50);
      t.string('staff_code',20);
      t.integer('total_scr_pragnent'); 
      t.integer('total_scr_lactating');
      t.integer('new_scr_pragnent'); 
      t.integer('new_scr_lactating');
      t.integer('ifa_tabs_rec_pragnent'); 
      t.integer('ifa_tabs_rec_lactating');
      t.integer('muac_gt_21_pragnent'); 
      t.integer('muac_gt_21_lactating');
      t.integer('muac_le_21_pragnent'); 
      t.integer('muac_le_21_lactating');
      t.timestamps();
     })
  } else {
    return 'table tblScrChildren already exists'
  }
}).then(r=>console.log(r)).catch(e=>console.log(e));

knex.schema.hasTable('v_tblScrChildrenFull').then(exists=>{
  if(!exists){
    return knex.schema.raw(`CREATE VIEW v_tblScrChildrenFull as SELECT 
    [main].[v_geo_1].[province], 
    [main].[v_geo_1].[district_name], 
    [main].[v_geo_1].[province_id], 
    [main].[v_geo_1].[district_id], 
    [main].[v_geo_1].[tehsil_id], 
    [main].[v_geo_1].[tehsil_name], 
    [main].[v_geo_1].[uc_id], 
    [main].[v_geo_1].[uc_name], 
    [main].[v_geo_1].[site_name], 
    [tblScrChildren].*
FROM   [main].[tblScrChildren]
    INNER JOIN [main].[v_geo_1] ON [main].[tblScrChildren].[site_id] = [main].[v_geo_1].[site_id];
`);
  } else {
    return 'table v_tblScrChildrenFull already exists'
  }
}).then(r=>console.log(r)).catch(e=>console.log(e));

knex.schema.hasTable('v_tblScrPlwFull').then(exists=>{
  if(!exists){
    return knex.schema.raw(`CREATE VIEW v_tblScrPlwFull as SELECT 
    [main].[v_geo_1].[province], 
    [main].[v_geo_1].[district_name], 
    [main].[v_geo_1].[province_id], 
    [main].[v_geo_1].[district_id], 
    [main].[v_geo_1].[tehsil_id], 
    [main].[v_geo_1].[tehsil_name], 
    [main].[v_geo_1].[uc_id], 
    [main].[v_geo_1].[uc_name], 
    [main].[v_geo_1].[site_name], 
    [tblScrPlw].*
FROM   [main].[v_geo_1]
    INNER JOIN [main].[tblScrPlw] ON [main].[tblScrPlw].[site_id] = [main].[v_geo_1].[site_id];
`);
  } else {
    return 'table v_tblScrPlwFull already exists'
  }
}).then(r=>console.log(r)).catch(e=>console.log(e));