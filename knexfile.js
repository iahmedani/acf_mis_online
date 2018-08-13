// update with your config settings
module.exports = {
  production: {
    client: 'mssql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  development: {
    client: 'mssql',
    connection: {
      host: '10.11.71.40',
      user: 'sa',
      password: 'imran123',
      database: 'acf_dev_new'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/development'
    }
  }
}