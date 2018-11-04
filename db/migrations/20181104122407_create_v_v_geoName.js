
exports.up = function(knex, Promise) {
  return knex.schema.raw(`create view v_geoName as
SELECT        tblGeoProvince.provinceName, tblGeoDistrict.districtName, tblGeoTehsil.tehsilName, tblGeoUC.ucName, tblGeoNutSite.siteName, tblGeoNutSite.id as site_id
FROM            tblGeoProvince INNER JOIN
                         tblGeoNutSite ON tblGeoProvince.id = tblGeoNutSite.province_id INNER JOIN
                         tblGeoDistrict ON tblGeoProvince.id = tblGeoDistrict.province_id AND tblGeoNutSite.district_id = tblGeoDistrict.id INNER JOIN
                         tblGeoTehsil ON tblGeoNutSite.tehsil_id = tblGeoTehsil.id AND tblGeoDistrict.id = tblGeoTehsil.district_id INNER JOIN
                         tblGeoUC ON tblGeoNutSite.uc_id = tblGeoUC.id AND tblGeoTehsil.id = tblGeoUC.tehsil_id` )
    .raw(`create view v_pro_dist as 
SELECT        tblGeoProvince.provinceName, tblGeoDistrict.districtName
FROM            tblGeoProvince INNER JOIN
                         tblGeoDistrict ON tblGeoProvince.id = tblGeoDistrict.province_id`)
};

exports.down = function(knex, Promise) {
  return knex.schema.raw("DROP VIEW v_geoName").raw('DROP VIEW v_pro_dist')
};

exports.config = { transaction: false };