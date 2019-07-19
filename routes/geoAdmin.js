const express = require('express');
const router = express.Router();
const knex = require('../config/db').knex;
const syncAuth = require('../config/auth/syncAuth');
const passportConf = require('../config/auth/passport');
// var csrf = require('csurf');
// var csrfProtection = csrf({ cookie: true });

const isAdminLoggedIn = function(req, res, next) {
  if (req.isAuthenticated() && req.user.auth_type === 'super') {
    next();
  } else {
    req.flash('info', 'Must be admin to access the page');
    res.redirect('/')
    // res.status(401).json({msg:'Un-authorized'})
  }
};

router.get('/', isAdminLoggedIn, (req, res)=>{
    res.render('geo_admin')
})
router.route('/province',isAdminLoggedIn)
    .get(async (req, res)=>{
        try {
            var province = await knex('tblGeoProvince');
            res.render('geo_admin/province', {province})
            
        } catch (error) {
            req.flash('red', 'Internal Error')
            res.redirect('back')
        }
    })
    .post(async(req, res)=>{
        try {
            var provinceName = req.body.provinceName;
            await knex('tblGeoProvince').insert({provinceName})
            req.flash('green', 'Province Added')
            res.redirect('back')
        } catch (error) {
            req.flash('red', 'db error')
            res.redirect('back')
        }
    });
router.route('/district',isAdminLoggedIn)
    .get(async (req, res)=>{
        try {
            var districts = await knex.raw(`SELECT * from [acf_mis].[dbo].[v_district]`);
            res.render('geo_admin/district', {districts: JSON.stringify(districts)})
            
        } catch (error) {
            console.log(error)
            req.flash('red', 'Internal Error')
            res.redirect('back')
        }
    })
    .post(async(req, res)=>{
        try {
            var provinceName = req.body.provinceName;
            await knex('tblGeoProvince').insert({provinceName})
            req.flash('green', 'Province Added')
            res.redirect('back')
        } catch (error) {
            req.flash('red', 'db error')
            res.redirect('back')
        }
    });
router.route('/tehsil',isAdminLoggedIn)
    .get(async (req, res)=>{
        try {
            var tehsils = await knex.raw(`SELECT * from [acf_mis].[dbo].[v_tehsil]`);
            res.render('geo_admin/tehsil', {tehsils})
            
        } catch (error) {
            console.log(error)
            req.flash('red', 'Internal Error')
            res.redirect('back')
        }
    })
    .post(async(req, res)=>{
        try {
            var provinceName = req.body.provinceName;
            await knex('tblGeoProvince').insert({provinceName})
            req.flash('green', 'Province Added')
            res.redirect('back')
        } catch (error) {
            req.flash('red', 'db error')
            res.redirect('back')
        }
    });

module.exports =router;