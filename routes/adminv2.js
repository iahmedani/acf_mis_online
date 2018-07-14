var express = require('express');
var router = express.Router();
var kdb = require('../config/myKnex').kdb;
var async = require('async');

// Add Project
router.route('/addProject')
  .get((req, resp)=>{
    kdb('tblProject')
      .then(result=>{

        resp.render('admin/addProject', {result:JSON.stringify(result)});
      })
      .catch(e=>{
        resp.render('admin/addProject', req.flash('warning', 'No project Found'))

      })
  })
  .post((req, resp)=>{
    kdb('tblProject')
      .insert(req.body)
      .then(result=>{
        console.log(result)
        req.flash('success', 'Project Added')

        resp.redirect(req.originalUrl)
      })
      .catch(e=>{
        req.flash('danger', 'error occured during adding Project, plz try again or contact admin')
        resp.redirect(req.originalUrl)
      })
  });

// Add Org
router.route('/addOrg')
  .get((req, resp)=>{
    async.parallel({
      projects: (cb)=>{
        kdb('tblProject')
          .then(result=>{
            cb(null, result)
          })
          .catch(e=>{
            cb(e)
          })
      },
      districts:(cb)=>{
        kdb('tblGeoProvince')
          .innerJoin('tblGeoDistrict',  'tblGeoProvince.id','tblGeoDistrict.province_id')
          .orderBy('provinceName', 'desc')
          .then(result=>{
            console.log(JSON.stringify(result));
            cb(null, result)
          })
          .catch(e=>{
            cb(e)
          })
      },
      organizations: (cb)=>{
        kdb('tblOrganization')
          .then(result=>{
            cb(null, result)
          })
          .catch(e=>{
            cb(e)
          })
      }
    }, (err, results)=>{
      if(err) console.log(err)
      console.log(results)
      resp.render('admin/addOrg', {
        project: results.projects,
        district: results.districts,
        orgs : JSON.stringify(results.organizations)
      })
    })
  })
  .post((req,resp)=>{
    console.log(req.body);
    var org_name = req.body.org_name;
    var projects = req.body.project_id;
    var dists = function (){
      var x = new Array();      
      if(Array.isArray(req.body.district_id)){
        for (const imran in req.body.district_id){
          var r = req.body.district_id[imran].split(",");
          x.push({dist_id:r[1],prov_id:r[0], project_id: projects})
        }
        return x
      } 
      else {
        return {district_id:req.body.district_id }
      }
    }();
    console.log(dists)
    async.waterfall([
      (cb)=>{
        kdb('tblOrganization')
          .insert({org_name})
          .returning('org_id')
          .then(result=>{
            // console.log({org_id:result})
            cb(null, result)
          })
          .catch(e=>{
            cb(e)
          })
      },
      (x, cb)=>{        
        for(const kamran in dists){
          dists[kamran].org_id = x;
        }
        kdb('tblOrgLocation')
          .insert(dists)
          .returning('orgLoc_id')
          .then(result=>{
            console.log({orgLoc_id:result})
            cb(null, result)
          })
          .catch(e=>{
            cb(e)
          })
      }
    ], function(err, result){
      if(err) resp.json(err);
      resp.redirect(req.originalUrl)
    })
  })

module.exports = router;