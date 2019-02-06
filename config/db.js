require("dotenv").config();
var connectionDetails = {
    production:{
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE
    },
    development: {
      host: process.env.DEV_DB_HOST,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASS,
      database: process.env.DEV_DB_DATABASE
    }
  }
  // var knex = require("knex")({
  //   client: "mssql",
  //   connection: ( process.env.NODE_ENV === "production") ? connectionDetails.production : connectionDetails.development
  // });

  module.exports.knex = require("knex")({
    client: "mssql",
    connection: ( process.env.NODE_ENV === "production") ? connectionDetails.production : connectionDetails.development
  });