
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoTehsil').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoTehsil').insert([
        {
          "tehsilName" : "Tando Adam",
          "created_at" : "2018-09-28T05:32:34Z",
          "updated_at" : "2018-09-28T05:32:34Z",
          "isActive" : 1,
          "district_id" : 1
        },
        {
          "tehsilName" : "Peshawar",
          "created_at" : "2018-09-28T05:37:57Z",
          "updated_at" : "2018-09-28T05:37:57Z",
          "isActive" : 1,
          "district_id" : 2
        },
        {
          "tehsilName" : "Lahore",
          "created_at" : "2018-09-28T05:38:12Z",
          "updated_at" : "2018-09-28T05:38:12Z",
          "isActive" : 1,
          "district_id" : 3
        },
        {
          "tehsilName" : "Chamber",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 8
        },
        {
          "tehsilName" : "Garhi Yasin",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 6
        },
        {
          "tehsilName" : "Ghora Bari",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 9
        },
        {
          "tehsilName" : "Hala",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 5
        },
        {
          "tehsilName" : "Jatti",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 7
        },
        {
          "tehsilName" : "Jhando Mari",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 8
        },
        {
          "tehsilName" : "Khanpur",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 6
        },
        {
          "tehsilName" : "KT Bunder",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 9
        },
        {
          "tehsilName" : "Lakhi",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 6
        },
        {
          "tehsilName" : "Matiari",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 5
        },
        {
          "tehsilName" : "Mirpur Bathoro",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 7
        },
        {
          "tehsilName" : "Mirpursakaro",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 9
        },
        {
          "tehsilName" : "Saeedabad",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 5
        },
        {
          "tehsilName" : "Shah Bandur",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 7
        },
        {
          "tehsilName" : "Shikarpur",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 6
        },
        {
          "tehsilName" : "Sujawal",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 7
        },
        {
          "tehsilName" : "Tando Allah Yar",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 8
        },
        {
          "tehsilName" : "Thatta",
          "created_at" : "2019-04-17T10:30:51Z",
          "updated_at" : "2019-04-17T10:30:51Z",
          "isActive" : 1,
          "district_id" : 9
        }
    ]);
    });
};
