const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const syncAuth = require('../config/auth/syncAuth');
passportConf = require('../config/auth/passport');

const isAdminLoggedIn = function(req, res, next) {
  if (req.isAuthenticated() && req.user.auth_type === 'super') {
    next();
  } else {
    req.flash('info', 'Must be admin to access the page');
    res.redirect('/')
    // res.status(401).json({msg:'Un-authorized'})
  }
};


router.get('/imranali', syncAuth, (req, res)=>{
  res.json({msg: true})
})

router.get('/', isAdminLoggedIn, (req, res) => {
  knex('tblAppKey')
    .then(result => {
      res.render('admin/register-app', {result})      
    })
    .catch(e => {
      console.log(e)
      req.flash('red', 'db error')
      res.render('admin/register-app')      
    })
})
router.post('/appkey', (req, res) => {
  var data = req.body;
  knex('tblAppKey')
    .insert(data)
    .returning('key')
    .then(result => {
      req.flash('green', 'Key Generated '+result[0])
      // req.newKey = result[0];
      // console.log(result)
      res.redirect('/regapp')
    })
    .catch(e => {
      console.log(e)
      req.flash('red', 'db error')

      res.redirect('/regapp')      
    })
})
router.patch('/appkey', (req, res) => {
  var id = parseInt(req.body.id);
  var stat = (req.body.stat == 'true')? 1 : 0 ;
  // console.log(req.body.status)
  knex('tblAppKey')
    .update({ status: stat })
    .where({id: id})
    .then(result => {
      console.log(result)
      res.json({msg: true})
    })
    .catch(e => {
      console.log(e)
      res.json({ msg: false })
           
    })
})

module.exports = router;