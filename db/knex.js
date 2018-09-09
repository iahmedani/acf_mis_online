var environment = process.env.NODE_ENV || "production";
var config = require("../knexfile")[environment];
console.log(config);
module.exports = require("knex")(config);
