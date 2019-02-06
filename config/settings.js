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

exports.lConfig = ( process.env.NODE_ENV === "production") ? connectionDetails.production : connectionDetails.development

exports.cloudConfig = ( process.env.NODE_ENV === "production") ? connectionDetails.production : connectionDetails.development

exports.imranConfig = ( process.env.NODE_ENV === "production") ? connectionDetails.production : connectionDetails.development

exports.port = (process.env.NODE_ENV === 'production') ? 8080 : 3000;

exports.secretKey = 'qwertyuioppoiuytrewq';