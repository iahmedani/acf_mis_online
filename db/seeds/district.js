
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoDistrict').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoDistrict').insert(
        [
          {
            "districtName" : "Sanghar",
            "created_at" : "2018-09-28T05:26:15Z",
            "updated_at" : "2018-09-28T05:26:15Z",
            "isActive" : 1,
            "province_id" : 1
          },
          {
            "districtName" : "Peshawar",
            "created_at" : "2018-09-28T05:26:20Z",
            "updated_at" : "2018-09-28T05:26:20Z",
            "isActive" : 1,
            "province_id" : 2
          },
          {
            "districtName" : "Lahore",
            "created_at" : "2018-09-28T05:26:25Z",
            "updated_at" : "2018-09-28T05:26:25Z",
            "isActive" : 1,
            "province_id" : 3
          },
          {
            "districtName" : "RawalPindi",
            "created_at" : "2018-09-28T05:26:30Z",
            "updated_at" : "2018-09-28T05:26:30Z",
            "isActive" : 1,
            "province_id" : 3
          },
          {
            "districtName" : "Matiari",
            "created_at" : "2019-04-17T10:26:32Z",
            "updated_at" : "2019-04-17T10:26:32Z",
            "isActive" : 1,
            "province_id" : 1
          },
          {
            "districtName" : "Shikarpur",
            "created_at" : "2019-04-17T10:26:32Z",
            "updated_at" : "2019-04-17T10:26:32Z",
            "isActive" : 1,
            "province_id" : 1
          },
          {
            "districtName" : "Sujawal",
            "created_at" : "2019-04-17T10:26:32Z",
            "updated_at" : "2019-04-17T10:26:32Z",
            "isActive" : 1,
            "province_id" : 1
          },
          {
            "districtName" : "Tando Allah Yar",
            "created_at" : "2019-04-17T10:26:32Z",
            "updated_at" : "2019-04-17T10:26:32Z",
            "isActive" : 1,
            "province_id" : 1
          },
          {
            "districtName" : "Thatta",
            "created_at" : "2019-04-17T10:26:32Z",
            "updated_at" : "2019-04-17T10:26:32Z",
            "isActive" : 1,
            "province_id" : 1
          }
      ]
      );
    });
};
