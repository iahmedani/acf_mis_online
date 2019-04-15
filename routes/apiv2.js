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
  var _ids = [];
  for (datum in data){
    try {
      var _id = await knex(table).insert(datum).returning(return_id)
      _ids.push(_id)
    } catch (error) {
      console.log(error)
      return error
    }
  }
  return _ids;
  
}
module.exports = function (app, knex) {

  app.post('/newScrBulk', syncAuth, async(req, resp)=>{
    var data = req.body;
    try {
      var x = await insertData('tblScrChildren', 'client_ch_scr_id', data, knex)
      resp.json(x)
    } catch (error) {
      console.log(error)
      resp.json(error)
    }
  })

  app.post('/newScrChild1', syncAuth, async (req, resp)=>{

    var data = req.body;
    data.client_scr_ch_id = data.ch_scr_id;
    delete data.ch_scr_id;

    try {
      var uploadId = await knex('tblScrChildren').insert(data).whereNot({client_scr_ch_id: data.client_scr_ch_id, client_id:data.client_id}).returning('client_scr_ch_id')
      resp.json(uploadId)
    } catch (error) {
      resp.json(error)
    }
  })

  app.post('/newScrChild2', syncAuth, async (req, resp)=>{
    var newArr = [];
    var newScrChArr = req.body
  newScrChArr.forEach(el => {
    el.client_scr_ch_id = el.ch_scr_id;
    delete el.ch_scr_id;
    el.upload_date = new Date().toJSON().split('T')[0]
    newArr.push(el);
    });
    try {
      var uploadId = await knex('tblScrChildren').insert(data).returning('client_scr_ch_id')
      resp.json(uploadId)
    } catch (error) {
      resp.json(error)
    }
  })

  app.post('/clientUpdate', (req, resp) => {
    var scr = req.body;
    console.log(scr)
    async.waterfall([
      function screening(cb) {
        cb(null, scr)
      }
    ], function (err, results) {
      if (err) {
        resp.json(err)
      } else {
        resp.json(results)
      }
    })

  })
// App Url updated 
  app.post('/getConfig',syncAuth, async(req, resp)=>{
    try {
      var x = await knex('tblConfig');
      resp.json(x)
    } catch (error) {
      resp.json(error)
    }
  })

  app.post('/scrv1', (req, resp) => {
    console.log(req.body);
    helper.uploadScreening(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.put('/scrv1', (req, resp) => {
    console.log(req.body);
    helper.updateScreening(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.post('/newChScr', syncAuth, (req, resp) => {
    // console.log(req.body);
    helper.uploadNewScrCh(req.body, knex)
      .then(result => {
        console.log(result);
        resp.json({
          success: result
        })
      })
      .catch(e => {
        console.log(e);
        resp.json({
          error: e
        });
      })
  })
  app.put('/newChScr', syncAuth, (req, resp) => {
    console.log(req.body);
    helper.updateNewScrCh(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.post('/newPlwScr', syncAuth,(req, resp) => {
    // console.log(req.body);
    helper.uploadNewScrPlw(req.body, knex)
      .then(result => {
        // console.log(result);
        resp.json({
          success: result
        })
      })
      .catch(e => {
        console.log(JSON.stringify(e));
        resp.json({
          error: e
        });
      })
  })
  app.put('/newPlwScr', syncAuth, (req, resp) => {
    console.log(req.body);
    helper.updateNewScrPlw(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.post('/otpv1', syncAuth, (req, resp) => {
    console.log(req.body);
    helper.uploadOtp(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        console.log(e)
        resp.json({
          error: e
        });
      })
  })
  app.put('/otpv1', syncAuth, (req, resp) => {
    console.log(req.body);
    helper.updateOtp(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.post('/followupv1', syncAuth, (req, resp) => {
    console.log(req.body);
    helper.uploadFollowup(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.put('/followupv1', syncAuth,  async (req, resp) => {
    var _followUps = req.body;
    var response = {
      id:[],
      errors:[]
    }
    for (followup of _followUps){
      if(date_diff_indays(followup.upload_date, new Date().toJSON().split('T')[0]) < 6){
        followup.client_followup_id = followup.id;
        delete followup.id;
        // adding new upload date
        followup.upload_date = new Date().toJSON().split('T')[0];
        
        try {
          var x = await knex('tblOtpFollowup').update(followup).where({client_followup_id :followup.client_followup_id,client_id:followup.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }

      }
    }
    if(response.errors.length > 0){
      console.log(response.errors)
      resp.json({error: 'Villages are not updated'})
    }else{

      resp.json({success: "Villages are updated"})
    }
  })
  app.post('/stock_reqv1', (req, resp) => {
    console.log(req.body);
    helper.uploadStockRequest(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.post('/sessionsv1', syncAuth,(req, resp) => {
    console.log(req.body);
    helper.uploadSession(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.put('/sessionsv1', syncAuth,(req, resp) => {
    console.log(req.body);
    helper.updateSession(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.post('/otpExitv1', syncAuth, (req, resp) => {
    console.log(req.body);
    helper.uploadOtpExit(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.put('/otpExitv1', syncAuth,(req, resp) => {
    console.log(req.body);
    helper.updateOtpExit(req.body, knex)
      .then(result => {
        resp.json({
          success: result
        })
      })
      .catch(e => {
        resp.json({
          error: e
        });
      })
  })
  app.post('/stockIn', syncAuth, async (req, resp)=>{

    var _stocks = req.body;
    var response = {
      id:[],
      errors:[]
    }
    for (stock of _stocks){
      stock.client_stockIn_id = stock.id;
      delete stock.id;
      try {
        var x = await knex('tblStock').insert(stock).whereNot({client_stockIn_id : stock.client_stockIn_id,client_id:stock.client_id })
        response.id.push(x)
      } catch (error) {
        response.errors.push(error)
      }
    }
    if(response.errors.length > 0){
      resp.json({error: 'Stocks are not uploaded'})
    }else{
      resp.json({success: 'Stocks are uploaded'})
    }
    
  });
  app.put('/stockIn', syncAuth, async(req, resp)=>{
    var _stocks = req.body;
    var response = {
      id:[],
      errors:[]
    }
    for (stock of _stocks){
      stock.client_stockIn_id = stock.id;
      delete stock.id;
      try {
        var x = await knex('tblStock').update(stock).where({client_stockIn_id : stock.client_stockIn_id,client_id:stock.client_id })
        response.id.push(x)
      } catch (error) {
        response.errors.push(error)
      }
    }
    if(response.errors.length > 0){
      resp.json({error: 'Stocks are not updated'})
    }else{
      resp.json({success: 'Stocks are updated'})
    }
  });
  // Managing Stock Out
  app.route('/stockOut')
    .all(syncAuth)
    .put(async(req, resp)=>{
      var _stocksOut = req.body;
      var response = {
        id:[],
        errors:[]
      }
      for (stockOut of _stocksOut){
        stockOut.client_stock_out_id = stockOut.stock_out_id;
        delete stockOut.stock_out_id;
        
        try {
          var x = await knex('tblSiteStock').update(stockOut).where({client_stock_out_id :stockOut.client_stock_out_id,client_id:stockOut.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'StocksOut are not updated'})
      }else{

        resp.json({success: 'StocksOut are updated'})
      }
    })
    .post(async(req, resp)=>{
      console.log(req.body)

      var _stocksOut = req.body;
      var response = {
        id:[],
        errors:[]
      }
      for (stockOut of _stocksOut){
        stockOut.client_stock_out_id = stockOut.stock_out_id;
        delete stockOut.stock_out_id;
        try {
          var x = await knex('tblSiteStock').insert(stockOut).whereNot({client_stock_out_id :stockOut.client_stock_out_id,client_id:stockOut.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)

        resp.json({error: 'StocksOut are not uploaded'})
      }else{
        resp.json({success: 'StocksOut are uploaded'})
      }

    });
    // Managing Stock Dist
  app.route('/StockDist')
    .all(syncAuth)
    .put(async(req, resp)=>{
      var _dists = req.body;
      var response = {
        id:[],
        errors:[]
      }
      var _x = new Date().toJSON().split('T')[0]
      for (dist of _dists){
        dist.client_dist_id = dist.dist_id;
        delete dist.dist_id;
        if(date_diff_indays(dist.upload_date, _x) <6){

          dist.upload_date = new Date().toJSON().split('T')[0]
          
          try {
            var x = await knex('tblStokDistv2').update(dist).where({client_dist_id :dist.client_dist_id,client_id:dist.client_id })
            response.id.push(x)
          } catch (error) {
            response.errors.push(error)
          }
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'Distributions are not updated'})
      }else{

        resp.json({success: 'Distributions are updated'})
      }

    })
    .post(async(req, resp)=>{
      console.log(JSON.stringify(req.body))
      

      var _dists = req.body;
      var response = {
        id:[],
        errors:[]
      }
      var _x = new Date().toJSON().split('T')[0]

      for (dist of _dists){
        dist.client_dist_id = dist.dist_id;
        delete dist.dist_id;
        dist.update_date = _x;
        
        try {
          var x = await knex('tblStokDistv2').insert(dist).whereNot({client_dist_id :dist.client_dist_id,client_id:dist.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'Distributions are not uploaded'})
      }else{

        resp.json({success: 'Distributions are uploaded'})
      }

  });
  // Managing VillageList
  app.route('/VillageList')
    .all(syncAuth)
    .put(async(req, resp)=>{
      var _villages = req.body;
      var response = {
        id:[],
        errors:[]
      }
      for (village of _villages){
        village.client_village_id = village.id;
        delete village.id;
        
        try {
          var x = await knex('tblVillages').update(village).where({client_village_id :village.client_village_id,client_id:village.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'Villages are not updated'})
      }else{

        resp.json({success: "Villages are updated"})
      }

    })
    .post(async(req, resp)=>{
      var _villages = req.body;
      var response = {
        id:[],
        errors:[]
      }
      for (village of _villages){
        village.client_village_id = village.id;
        delete village.id;
        
        try {
          var x = await knex('tblVillages').insert(village).whereNot({client_village_id :village.client_village_id,client_id:village.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'Villages are not uploaded'})
      }else{

        resp.json({success: "Villages are uploaded"})
      }
  });

  //
  app.route('/CHWList')
    .all(syncAuth)
    .put(async(req, resp)=>{
      var _LHWs = req.body;
      var response = {
        id:[],
        errors:[]
      }
      for (lhw of _LHWs){
        lhw.client_lhw_id = lhw.id;
        delete lhw.id;
        
        try {
          var x = await knex('tblLhw').update(lhw).where({client_lhw_id :lhw.client_lhw_id,client_id:lhw.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'CHW Lists are not updated'})
      }else{

        resp.json({success: "CHW Lists are updated"})
      }


    })
    .post(async(req, resp)=>{
      var _LHWs = req.body;
      var response = {
        id:[],
        errors:[]
      }
      for (lhw of _LHWs){
        lhw.client_lhw_id = lhw.id;
        delete lhw.id;
        
        try {
          var x = await knex('tblLhw').insert(lhw).whereNot({client_lhw_id :lhw.client_lhw_id,client_id:lhw.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'CHW Lists are not uploaded'})
      }else{

        resp.json({success: "CHW Lists are uploaded"})
      }
  });
  app.route('/LHSList')
    .all(syncAuth)
    .put(async(req, resp)=>{
      var _LHS = req.body;
      var response = {
        id:[],
        errors:[]
      }
      for (sup of _LHS){
        sup.client_sup_id = sup.id;
        delete sup.id;
        
        try {
          var x = await knex('tblSupervisors').update(sup).where({client_sup_id :sup.client_sup_id,client_id:sup.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'LHS Lists are not updated'})
      }else{

        resp.json({success: "LHS Lists are updated"})
      }

    })
    .post(async(req, resp)=>{
      var _LHS = req.body;
      var response = {
        id:[],
        errors:[]
      }
      for (sup of _LHS){
        sup.client_sup_id = sup.id;
        delete sup.id;
        
        try {
          var x = await knex('tblSupervisors').insert(sup).whereNot({client_sup_id :sup.client_sup_id,client_id:sup.client_id })
          response.id.push(x)
        } catch (error) {
          response.errors.push(error)
        }
      }
      if(response.errors.length > 0){
        console.log(response.errors)
        resp.json({error: 'LHS Lists are not uploaded'})
      }else{

        resp.json({success: "LHS Lists are uploaded"})
      }
  });


  app.post('/getAllScrSum', (req, res) => {
    var qry = req.body;
    var chQry = 'exec getAllChildScrv1 '
    var plwQry = 'exec getAllPlwScrv1 '
    var chAdd = 'exec chAdmissions '
    var chExit = 'exec chExit '
    var sessionQry = 'exec sessionSum '
    var builder = [];
    if (Object.keys(qry).length) {
      if (qry.province) {
        builder.push(`@Province = '${qry.province}'`)
      }
      if (qry.district) {
        builder.push(`@District = '${qry.district}'`)
      }
      if (qry.date) {
        builder.push(`@StartDate = '${qry.date.strDate}' , @EndDate = '${qry.date.endDate}'`)
      }
      if (builder.length > 0) {
        chQry += builder.toString();
        plwQry += builder.toString();
        chAdd += builder.toString();
        chExit += builder.toString();
        sessionQry += builder.toString();
        console.log(chQry)
        // res.send(chQry)
      }
      
    } 
    async.series({
      child: (cb) => {
        knex.raw(chQry)
          .then(result => {
            cb(null,result)
          }).catch(e => {
            cb(e)
          })
      }
      ,
      plw: (cb) => {
        knex.raw(plwQry)
          .then(result => {
            cb(null, result)
          }).catch(e => {
            cb(e)
          })
      }
      ,
      chAdd: (cb) => {
        knex.raw(chAdd)
          .then(result => {
            cb(null, result)
          }).catch(e => {
            cb(e)
          })
      }
      ,
      chExit: (cb) => {
        knex.raw(chExit)
          .then(result => {
            cb(null, result)
          }).catch(e => {
            cb(e)
          })
      }
      ,
      sessions: (cb) => {
        knex.raw(sessionQry)
          .then(result => {
            cb(null, result)
          }).catch(e => {
            cb(e)
          })
      }
    }, (err, results) => {
      if (err) {
        res.json({ msg: 'Internal Error'})
      } else {
        console.log(results)
        res.json(results)
      }
    })
    
  })

  app.post('/getAllScrSumv1', (req, res) => {
    var qry = req.body;
    console.log(qry)
    var chQry = 'exec getAllChildScrv1 '
    var plwQry = 'exec getAllPlwScrv1 '
    var builder = [];
    console.log(!Object.keys(qry).length);
    if (Object.keys(qry).length) {
      if (qry.province) {
        builder.push(`@Province = '${qry.province}'`)
      }
      if (qry.district) {
        builder.push(`@District = '${qry.district}'`)
      }
      if (qry.date) {
        builder.push(`@StartDate = '${qry.date.strDate}' , @EndDate = '${qry.date.endDate}'`)
      }
      if (builder.length > 0) {
        chQry += builder.toString();
        plwQry += builder.toString();
        console.log(chQry)
        // res.send(chQry)
      }

    }
    async.parallel({
      child: (cb) => {
        knex.raw(chQry)
          .then(result => {
            cb(null, result)
          }).catch(e => {
            cb(e)
          })
      },
      plw: (cb) => {
        knex.raw(plwQry)
          .then(result => {
            cb(null, result)
          }).catch(e => {
            cb(e)
          })
      }
    }, (err, results) => {
      if (err) {
        res.json({ msg: 'Internal Error' })
      } else {
        console.log(results)

        res.json(results)
      }
    })

  })


}