require("dotenv").config();
var cors = require("cors");
const settings = require("./config/settings");
const dbConfig =
  process.env.NODE_ENV === "production"
    ? settings.cloudConfig
    : settings.lConfig;
const sql = require("mssql");
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST, // You can use 'localhost\\instance' to connect to named instance
  database: process.env.DB_DATABASE
};
var knex = require("knex")({
  client: "mssql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  }
});
const express = require("express"),
  // mongoose = require('mongoose'),
  passport = require("passport"),
  passportConf = require("./config/auth/passport"),
  session = require("express-session"),
  MSSQLStore = require("connect-mssql")(session),
  cookieParser = require("cookie-parser"),
  logger = require("morgan"),
  // ejs = require('ejs'),
  flash = require("connect-flash"),
  expressValidator = require("express-validator"),
  engine = require("ejs-mate");

// express app
var app = express();

// middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(logger("dev"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: settings.secretKey,
    store: new MSSQLStore(config, {
      autoReconnect: true,
      autoRemove: "native"
    }),
    cookie: { maxAge: 3600000, expires: new Date(Date.now() + 3600000) }
  })
);
app.use(flash());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.user = req.user;
  // app.locals.msg = req.msg || null;
  app.locals.messages = require("express-messages")(req, res);
  app.locals.url = req.path;
  next();
});
// Express Validator Middleware
app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// warehouse routes;
app.use("/warehouse/admin", require("./routes/warehouse/wh_admin"));
app.use("/new_admin", require("./routes/users"));
app.use("/warehouse/common", require("./routes/warehouse/wh_common"));
app.use("/regapp", require('./routes/test'));

// routes

require("./routes/main")(app);
require("./routes/admin")(app);
require("./routes/reporting")(app, knex);
require("./routes/api")(app, knex);
require("./routes/apiv2")(app, knex);
// require("./warehouse/wh_common")(app, knex);

app.listen(process.env.PORT, err => {
  if (err) throw new Error(err);
  console.log("server started on port :" + process.env.PORT);
});
