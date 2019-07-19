const express = require('express');
const router = express.Router();
const knex = require('../config/db').knex;
const syncAuth = require('../config/auth/syncAuth');
const passportConf = require('../config/auth/passport');