require('dotenv').config();
var knex = require('knex')({
    client: 'mssql',
    connection: {
    host:'172.31.16.0',
    user : 'shumaila',
    password : 'thisismyawesomedb',
    database : 'acf_mis',
    }
  });

  knex('tblGeoProvince')
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err);
    })