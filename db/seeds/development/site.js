
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoNutSite').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoNutSite').insert([
        {
            "siteName": "Oderolal",
            "province_id": 1,
            "district_id": 1,
            "tehsil_id": 1,
            "uc_id": 1,
            "OTP": 1,
            "SFP": 1,
            "SC": 1,
            "created_at": "2018-09-28T10:47:50.097Z",
            "updated_at": "2018-09-28T10:47:50.097Z"
        },
        {
            "siteName": "Bakha Khel",
            "province_id": 2,
            "district_id": 2,
            "tehsil_id": 2,
            "uc_id": 2,
            "OTP": 1,
            "SFP": 1,
            "SC": 1,
            "created_at": "2018-09-28T10:48:35.893Z",
            "updated_at": "2018-09-28T10:48:35.893Z"
        }
    ]);
    });
};
