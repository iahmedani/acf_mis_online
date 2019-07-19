const async = require('async');
const helper = require('./apihelper');
const syncAuth = require('../config/auth/syncAuth');
function date_diff_indays (d1, d2) {
  var diff = Date.parse(d2) - Date.parse(d1);
  return Math.floor(diff / 86400000);
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}
async function insertData(table, return_id, data, knex){
  var _ids = {
    insert:[],
    available:[]
  }
  var _upload_date = new Date().toJSON().split('T')[0];
  for (datum of data){
    datum.upload_date = _upload_date;
    // console.log(datum)
    try {
      var _insert = await knex.select(return_id).from(table).where(return_id, datum[return_id]).andWhere('client_id', datum.client_id);
      if(_insert.length){
        _ids.available.push(_insert[0][return_id])
      }else{
        var _id = await knex(table).insert(datum).returning(return_id)
        _ids.insert.push(_id[0])
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }
  // console.log(_ids)
   return _ids;
}
async function updateData(table, return_id, data, knex){
  var _ids = [];
  var _upload_date = new Date().toJSON().split('T')[0];
  for (datum of data){
    datum.upload_date = _upload_date;
    try {
      var _id = await knex(table).update(datum).returning(return_id).where(return_id,'=',datum[return_id]).where({client_id:datum.client_id})
      _ids.push(_id[0])
    } catch (error) {
      console.log(error)
      return error
    }
  }
  // console.log(_ids)
  return _ids;
  
}

module.exports = function (app, knex) {

  // Children Screening
  app.post('/api3/newScrBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblScrChildren', 'client_scr_ch_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  });
  app.put('/api3/newScrBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblScrChildren', 'client_scr_ch_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  });

  // PLW Screening
  app.post('/api3/newScrPlwBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblScrPlw', 'client_scr_plw_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  });
  app.put('/api3/newScrPlwBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblScrPlw', 'client_scr_plw_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  });

  // Followup
  app.post('/api3/otpFollowupBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblOtpFollowup', 'client_followup_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/otpFollowupBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblOtpFollowup', 'client_followup_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  // Stock Out
  app.post('/api3/stockOutBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblSiteStock', 'client_stock_out_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/stockOutBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblSiteStock', 'client_stock_out_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  // Stock Dist
  app.post('/api3/stockDistBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblStokDistv2', 'client_dist_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/stockDistBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblStokDistv2', 'client_dist_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  // Village List
  app.post('/api3/villagesBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblVillages', 'client_village_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/villagesBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblVillages', 'client_village_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  //Lhws
  app.post('/api3/lhwBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblLhw', 'client_lhw_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/lhwBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblLhw', 'client_lhw_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  // Supervisors
  app.post('/api3/supsBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblSupervisors', 'client_sup_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/supsBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblSupervisors', 'client_sup_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  // Admissions
  app.post('/api3/admisionsBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    console.log(data)
    try {
      var x = await insertData('tblOtpAdd', 'client_otp_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/admisionsBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblOtpAdd', 'client_otp_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  // Exits
  app.post('/api3/exitsBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblOtpExit', 'client_exit_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/exitsBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblOtpExit', 'client_exit_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  // Sessions
  app.post('/api3/sessionsBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblSessions', 'client_session_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/sessionsBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblSessions', 'client_session_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  // Stock In
  app.post('/api3/stockInBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblStock', 'client_stockIn_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })
  app.put('/api3/stockInBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await updateData('tblStock', 'client_stockIn_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  //Electron geo data push
  app.get('/api3/getProvince', syncAuth, (req, resp) => {
    knex.select().table(`tblGeoProvince`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    }).catch(e=>{
      console.log(e)
    })
  })
  app.get('/api3/getDistrict', syncAuth, (req, resp) => {
    knex.select().table(`tblGeoDistrict`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    }).catch(e=>{
      console.log(e)
    })
  })
  
  app.get('/api3/getTehsil', syncAuth, (req, resp) => {
    knex.select().table(`tblGeoTehsil`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    }).catch(e=>{
      console.log(e)
    })
  })
  
  app.get('/api3/getUC', syncAuth, (req, resp) => {
    knex.select().table(`tblGeoUC`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    }).catch(e=>{
      console.log(e)
    })
  });
  
  app.get('/api3/getSite', syncAuth,(req, resp) => {
    knex.select().table(`tblGeoNutSite`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    }).catch(e=>{
      console.log(e)
    })
  });

  app.get('/api3/getItems', syncAuth,(req, resp) => {
    knex.select().table(`tblCommodity`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    }).catch(e=>{
      console.log(e)
    })
  });

  // App Url updated 
  app.post('/api3/getConfig',syncAuth, async(req, resp)=>{
    try {
      var x = await knex('tblConfig');
      resp.json(x)
    } catch (error) {
      resp.json(error)
    }
  })
}