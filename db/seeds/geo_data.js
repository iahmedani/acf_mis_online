
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoProvince').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoProvince').insert([
        {
          "provinceName" : "Sindh",
          "created_at" : "2018-09-28T05:22:57Z",
          "updated_at" : "2018-09-28T05:22:57Z",
          "isActive" : 1
        },
        {
          "provinceName" : "KPK",
          "created_at" : "2018-09-28T05:23:07Z",
          "updated_at" : "2018-09-28T05:23:07Z",
          "isActive" : 1
        },
        {
          "provinceName" : "Punjab",
          "created_at" : "2018-09-28T05:23:18Z",
          "updated_at" : "2018-09-28T05:23:18Z",
          "isActive" : 1
        }
    ]);
    });
};
