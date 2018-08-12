const async = require('async');
const helper = require('./apihelper');
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




}