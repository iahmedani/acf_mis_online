module.exports = function(app, knex){
  app.post('/Province', (req, resp) => {
    knex.select().table(`tblGeoProvince`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    })
  });
  app.post('/District/:pid', (req, resp)=>{
    var pid = req.params.pid;
    console.log(pid);
    knex('tblGeoDistrict')
      .where({province_id:pid})
      .then(result=>{
        resp.json(result);
        console.log(result)
      })
      .catch(err=>{
        // req.flash('red','system error')
        // resp.end();
        resp.json(err);
        console.log(err);
      })
  })
  app.post('/Tehsil/:did', (req, resp)=>{
    knex('tblGeoTehsil')
      .where({district_id:req.params.did})
      .then(result=>{
        resp.json(result)
      })
      .catch(err=>{
        req.flash('red','system error')
        resp.end();
      })
  })
  app.post('/UC/:tid', (req, resp)=>{
    knex('tblGeoUC')
      .where({tehsil_id:req.params.tid})
      .then(result=>{
        resp.json(result)
      })
      .catch(err=>{
        req.flash('red','system error')
        resp.end();
      })
  })
  app.post('/Site/:uid', (req, resp)=>{
    knex('tblGeoNutSite')
      .where({uc_id:req.params.uid})
      .then(result=>{
        resp.json(result)
      })
      .catch(err=>{
        req.flash('red','system error')
        resp.end();
      })
  })

  //Electron geo data push
  app.get('/getProvince', (req, resp) => {
    knex.select().table(`tblGeoProvince`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    })
  })
  app.get('/getDistrict', (req, resp) => {
    knex.select().table(`tblGeoDistrict`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    })
  })
  
  app.get('/getTehsil', (req, resp) => {
    knex.select().table(`tblGeoTehsil`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    })
  })
  
  app.get('/getUC', (req, resp) => {
    knex.select().table(`tblGeoUC`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    })
  });
  
  app.get('/getSite', (req, resp) => {
    knex.select().table(`tblGeoNutSite`).then((result) => {
      if (result.length > 0) {
        resp.json(result);
      } else {
        resp.json({
          'msg': 'No data to show'
        });
      }
    })
  });

  // electron add screening data
  
app.post('/screening', (req, resp) => {
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  var data = req.body;
  console.log(data);
  var plw = {};
  var child = {};
  if (data.is_plw === 1) {
    plw.screening_type = data.screening_type;
    plw.screening_date = data.screening_date;
    plw.data_entry_date = data.data_entry_date;
    plw.site_id = data.site_id;
    plw.site_village = data.site_village;
    plw.staff_name = data.staff_name;
    plw.name = data.name;
    plw.f_or_h_name = data.f_or_h_name;
    plw.address = data.address;
    plw.age = data.age;
    plw.gender = data.gender;
    plw.muac = data.muac;
    plw.status = data.status;
    plw.is_plw = data.is_plw;
    plw.plw_type = data.plw_type;
    plw.no_mm_tabs = data.no_mm_tabs;
    plw.client_scr_id = data.screening_id;
    plw.client_id = data.client_id;
    // plw.created_at = Date.now();
  } else {
    child.screening_type = data.screening_type;
    child.screening_date = data.screening_date;
    child.data_entry_date = data.data_entry_date;
    child.site_id = data.site_id;
    child.site_village = data.site_village;
    child.staff_name = data.staff_name;
    child.name = data.name;
    child.f_or_h_name = data.f_or_h_name;
    child.address = data.address;
    child.age = data.age;
    child.gender = data.gender;
    child.muac = data.muac;
    child.status = data.status;
    child.is_plw = data.is_plw;
    child.oedema = data.oedema;
    child.deworming = data.deworming;
    child.no_mm_sch = data.no_mm_sch;
    child.client_scr_id = data.screening_id;
    child.client_id = data.client_id;
    // child.created_at = Date.now();

  }
  if (isEmpty(plw)) {
    console.log('child' + child);
    knex('Screening')
      .insert(child)
      .then(result => {
        console.log({
          'msg': 'Child record added'
        });
        resp.json({
          'msg': 'Child record added'
        });
      })
      .catch((err) => {
        console.log({
          err
        });
        resp.json({
          'msg': 'Error occured during adding child screening'
        });
      })
  } else {
    console.log('plw' + plw);
    knex('Screening')
      .insert(plw)
      .then(result => {
        console.log({
          'msg': 'PLW record added'
        });
        resp.json({
          'msg': 'PLW record added'
        });
      })
      .catch((err) => {
        console.log(err);
        resp.json({
          'msg': 'Error occured during adding PLW screening'
        });
      })
  }
})

app.post('/update_screening', (req, resp) => {
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  var data = req.body;
  console.log(data);
  var plw = {};
  var child = {};
  if (data.is_plw === 1) {
    plw.screening_type = data.screening_type;
    plw.screening_date = data.screening_date;
    plw.data_entry_date = data.data_entry_date;
    plw.site_id = data.site_id;
    plw.site_village = data.site_village;
    plw.staff_name = data.staff_name;
    plw.name = data.name;
    plw.f_or_h_name = data.f_or_h_name;
    plw.address = data.address;
    plw.age = data.age;
    plw.gender = data.gender;
    plw.muac = data.muac;
    plw.status = data.status;
    plw.is_plw = data.is_plw;
    plw.plw_type = data.plw_type;
    plw.no_mm_tabs = data.no_mm_tabs;
    // plw.client_scr_id = data.screening_id;
    // plw.client_id = data.client_id;
    // plw.created_at = Date.now();
  } else {
    child.screening_type = data.screening_type;
    child.screening_date = data.screening_date;
    child.data_entry_date = data.data_entry_date;
    child.site_id = data.site_id;
    child.site_village = data.site_village;
    child.staff_name = data.staff_name;
    child.name = data.name;
    child.f_or_h_name = data.f_or_h_name;
    child.address = data.address;
    child.age = data.age;
    child.gender = data.gender;
    child.muac = data.muac;
    child.status = data.status;
    child.is_plw = data.is_plw;
    child.oedema = data.oedema;
    child.deworming = data.deworming;
    child.no_mm_sch = data.no_mm_sch;
    

  }
  if (isEmpty(plw)) {
    console.log('child' + child);
    knex('Screening')
      .where({
        client_scr_id: data.screening_id,
        client_id: data.client_id,
        
      })
      .update(child)
      .then(result => {
        console.log({
          'msg': 'Child record updated'
        });
        resp.json({
          'msg': 'Child record updated'
        });
      })
      .catch((err) => {
        console.log({
          err
        });
        resp.json({
          'msg': 'Error occured during updating child screening'
        });
      })
  } else {
    console.log('plw' + plw);
    knex('Screening')
    .where({
      client_scr_id: data.screening_id,
      client_id: data.client_id,
      
    })
      .update(plw)
      .then(result => {
        console.log({
          'msg': 'PLW record updated'
        });
        resp.json({
          'msg': 'PLW record updated'
        });
      })
      .catch((err) => {
        console.log(err);
        resp.json({
          'msg': 'Error occured during updating PLW screening'
        });
      })
  }
})
 
}