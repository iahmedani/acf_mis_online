
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblAppBinding').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblAppBinding').insert([
        {
          "mac" : "68-07-15-87-FC-E3",
          "regKey" : "1284A8A5-FA53-448E-BDFD-2B7F3C428728",
          "created_at" : "2019-04-18T01:55:22Z"
        }
      ]);
    });
};
