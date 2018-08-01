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

  knex.schema.hasTable('')