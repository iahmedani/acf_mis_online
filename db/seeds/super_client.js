
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblAppKey').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblAppKey').insert([
        {
          "name" : "Super User",
          "organization" : "User User",
          "email" : "shumaila.db@gmail.com",
          "key" : "1284A8A5-FA53-448E-BDFD-2B7F3C428728",
          "created_at" : "2019-04-17T19:00:00Z",
          "status" : 1
        }
      ]);
    });
};
