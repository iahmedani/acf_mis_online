
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoUC').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoUC').insert([
        {
            "ucName": "Oderolal",
            "tehsil_id": 1,
            "created_at": "2018-09-28T10:42:44.393Z",
            "updated_at": "2018-09-28T10:42:44.393Z"
        },
        {
            "ucName": "Bhakha Khel",
            "tehsil_id": 2,
            "created_at": "2018-09-28T10:43:09.630Z",
            "updated_at": "2018-09-28T10:43:09.630Z"
        },
        {
            "ucName": "Lahore",
            "tehsil_id": 3,
            "created_at": "2018-09-28T10:43:30.207Z",
            "updated_at": "2018-09-28T10:43:30.207Z"
        },
        {
            "ucName": "Achini",
            "tehsil_id": 2,
            "created_at": "2018-09-28T10:43:51.723Z",
            "updated_at": "2018-09-28T10:43:51.723Z"
        },
        {
            "ucName": "Bazid Khel",
            "tehsil_id": 2,
            "created_at": "2018-09-28T10:44:06.990Z",
            "updated_at": "2018-09-28T10:44:06.990Z"
        },
        {
            "ucName": "Musazai",
            "tehsil_id": 2,
            "created_at": "2018-09-28T10:44:30.800Z",
            "updated_at": "2018-09-28T10:44:30.800Z"
        },
        {
            "ucName": "Pajjagai",
            "tehsil_id": 2,
            "created_at": "2018-09-28T10:44:45.707Z",
            "updated_at": "2018-09-28T10:44:45.707Z"
        },
        {
            "ucName": "Surozai",
            "tehsil_id": 2,
            "created_at": "2018-09-28T10:45:00.847Z",
            "updated_at": "2018-09-28T10:45:00.847Z"
        },
        {
            "ucName": "Tahkal Payan 1",
            "tehsil_id": 2,
            "created_at": "2018-09-28T10:45:15.830Z",
            "updated_at": "2018-09-28T10:45:15.830Z"
        }
    ]);
    });
};
