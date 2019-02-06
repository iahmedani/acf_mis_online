
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoTehsil').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoTehsil').insert([
        {
            "tehsilName": "Tando Adam",
            "district_id": 1,
            "created_at": "2018-09-28T10:32:34.713Z",
            "updated_at": "2018-09-28T10:32:34.713Z"
        },
        {
            "tehsilName": "Peshawar",
            "district_id": 2,
            "created_at": "2018-09-28T10:37:57.507Z",
            "updated_at": "2018-09-28T10:37:57.507Z"
        },
        {
            "tehsilName": "Lahore",
            "district_id": 3,
            "created_at": "2018-09-28T10:38:12.553Z",
            "updated_at": "2018-09-28T10:38:12.553Z"
        }
    ]);
    });
};
