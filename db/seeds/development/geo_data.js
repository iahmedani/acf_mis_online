
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoProvince').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoProvince').insert([
        {
            "provinceName": "Sindh",
            "created_at": "2018-09-28T10:22:57.297Z",
            "updated_at": "2018-09-28T10:22:57.297Z"
        },
        {
            "provinceName": "KPK",
            "created_at": "2018-09-28T10:23:07.233Z",
            "updated_at": "2018-09-28T10:23:07.233Z"
        },
        {
            "provinceName": "Punjab",
            "created_at": "2018-09-28T10:23:18.797Z",
            "updated_at": "2018-09-28T10:23:18.797Z"
        }
    ]);
    });
};
