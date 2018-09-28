require('dotenv').config();
var knex = require("knex")({
    client: "mssql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE
    }});


    knex.schema.raw(
        `CREATE TABLE  tblAppKey (
          id int IDENTITY(1,1) PRIMARY KEY,
          name varchar(255) NOT NULL,
          organization varchar(255) NOT NULL,
          email varchar(244) NOT NULL,
          [key] uniqueidentifier NOT NULL DEFAULT newid(),
          created_at date NOT NULL DEFAULT GETDATE(),
          status bit NOT NULL DEFAULT 0,
          CONSTRAINT UC_AppKey UNIQUE (email) 
        )`
      ).createTable('tblAppBinding', t => {
        t.increments('id');
        t.string('mac');
        t.uuid('regKey');
        t.timestamp('created_at').defaultTo(knex.fn.now());
      }).then(result=>{
          console.log('yes')
      }).catch(e=>console.log(e))