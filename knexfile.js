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
      host: "192.168.100.6",
      user: "sa",
      password: "imran123",
      database: "acf_dev_new"
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/development"
    }
  }
};
