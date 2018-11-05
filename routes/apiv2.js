const async = require('async');
const helper = require('./apihelper');
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}
module.exports = function (app, knex) {


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
  app.post('/newChScr', (req, resp) => {
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
  app.put('/newChScr', (req, resp) => {
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
  app.post('/newPlwScr', (req, resp) => {
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
  app.put('/newPlwScr', (req, resp) => {
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
  app.post('/otpv1', (req, resp) => {
    console.log(req.body);
    helper.uploadOtp(req.body, knex)
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
  app.put('/otpv1', (req, resp) => {
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
  app.post('/followupv1', (req, resp) => {
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
  app.post('/sessionsv1', (req, resp) => {
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
  app.put('/sessionsv1', (req, resp) => {
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
  app.post('/otpExitv1', (req, resp) => {
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
  app.put('/otpExitv1', (req, resp) => {
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