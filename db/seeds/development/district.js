
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoDistrict').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoDistrict').insert(
        [
          {
              "districtName": "Sanghar",
              "province_id": 1,
              "created_at": "2018-09-28T10:26:15.950Z",
              "updated_at": "2018-09-28T10:26:15.950Z"
          },
          {
              "districtName": "Peshawar",
              "province_id": 2,
              "created_at": "2018-09-28T10:26:20.777Z",
              "updated_at": "2018-09-28T10:26:20.777Z"
          },
          {
              "districtName": "Lahore",
              "province_id": 3,
              "created_at": "2018-09-28T10:26:25.620Z",
              "updated_at": "2018-09-28T10:26:25.620Z"
          },
          {
              "districtName": "RawalPindi",
              "province_id": 3,
              "created_at": "2018-09-28T10:26:30.467Z",
              "updated_at": "2018-09-28T10:26:30.467Z"
          }
      ]
      );
    });
};
