require("dotenv").config();
var connectionDetails = {
    production:{
      server: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE
    },
    development: {
      server: process.env.DEV_DB_HOST,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASS,
      database: process.env.DEV_DB_DATABASE
    }
  }

const sql = require('mssql'),
  apiConfig = ( process.env.NODE_ENV === "production") ? connectionDetails.production : connectionDetails.development
  dbConfig =  ( process.env.NODE_ENV === "production") ? connectionDetails.production : connectionDetails.development
// exports.close = sql.close();
exports.getData = function (query, callback) {
  sql.connect(apiConfig)
    .then(function (pool) {
      return pool.request()
        .query(query)
    })
    .then(function (result) {
      callback(result.recordset);
      sql.close();
    })
    .catch(function (err) {
      callback(null, err);
      sql.close();
    })
}

exports.executeSql = function (query, callback) {
  sql.connect(dbConfig)
    .then(function (pool) {
      return pool.request()
        .query(query)
    })
    .then(function (result) {
      callback(result.recordset);
      sql.close();
    })
    .catch(function (err) {
      callback(null, err);
      sql.close();
    })
}

exports.executeSqlInsert = function (query, callback) {
  sql.connect(dbConfig)
    .then(function (pool) {
      return pool.request()
        .query(query)
    })
    .then(function (result) {
      callback(result);
      sql.close();
    })
    .catch(function (err) {
      callback(null, err);
      sql.close();
    })
}