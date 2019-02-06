// update with your config settings
require("dotenv").config();
module.exports = {
  production: {
    client: "mssql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },
  development: {
    client: "mssql",
    connection: {
      host: process.env.DEV_DB_HOST,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASS,
      database: process.env.DEV_DB_DATABASE
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/development"
    }
  },
  docker: {
    client: "mssql",
    connection: {
      host: "localhost",
      user: "sa",
      password: "@Badin41101",
      database: "acf_online_db_new"
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/development"
    }
  }
};
