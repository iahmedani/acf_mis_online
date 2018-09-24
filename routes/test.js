const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const syncAuth = require('../config/auth/syncAuth');

router.get('/imranali', syncAuth, (req, res)=>{
  res.json({msg: true})
})

router.get('/', (req, res) => {
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