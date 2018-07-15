module.exports.uploadScreening = (scrArray, knex) => {
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  
  var wfp = [];
  return new Promise((resolve, reject) => {
    console.log(scrArray)
    scrArray.forEach(data => {
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
        plw.username = data.username;
        plw.org_name = data.org_name;
        plw.project_name = data.project_name;
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
        child.username = data.username;
        child.org_name = data.org_name;
        child.project_name = data.project_name;
        // child.created_at = Date.now();

      }
      if (isEmpty(plw)) {
        console.log('child' + child);
        knex('Screening')
          .where({
            client_scr_id: child.client_scr_id,
            client_id: child.client_id
          })
          .then(result => {
            if (result.length > 0) {
              console.log('record available')
            } else {
              return knex('Screening')
                .insert(child)
                .returning('client_scr_id')

            }
          })
          .then(kamran => {
            // console.log({childScr: result})
            if (kamran) wfp.push('Child Added')
          })
          .catch((err) => {
            reject(err);
          })
      } else {
        console.log('plw' + plw);
        knex('Screening')
          .where({
            client_scr_id: plw.client_scr_id,
            client_id: plw.client_id
          })
          .then(result => {
            if (result.length > 0) {
              // console.log('Scr record already exists')
              console.log('record available');
            } else {
              return knex('Screening')
                .insert(plw)
                .returning('client_scr_id')

            }
          })
          .then(imran => {
            if (imran) wfp.push('PLW SCR Added')
          })
          .catch((err) => {
            reject(err);
          })
      }
    })
    resolve('SCR Added')
  })
}

module.exports.updateScreening = function (scrUpd, knex) {
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  var wfp = [];
  return new Promise((resolve, reject) => {
    
    scrUpd.forEach(data => {
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
            wfp.push('Child record updated')
          })
          .catch((err) => {
            reject(err)
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
            wfp.push('PLW record updated')
          })
          .catch((err) => {
            reject(err);
          })
      }
    })
    resolve('SCR Updated')
  })
}

module.exports.uploadOtp = function (otpAdd, knex) {
  // resp.json(data);
  // console.log(data);
  return new Promise((resolve, reject) => {
    otpAdd.forEach(data => {
      data.client_otp_id = data.otp_id;
      delete data.otp_id;
      knex('tblOtpAdd')
        .where({
          client_id: data.client_id,
          client_otp_id: data.client_otp_id
        })
        .then(result => {
          if (result.length > 0) {
            console.log('OTP Admission already exists')
          } else {
            knex('tblOtpAdd')
              .insert(data)
              .returning('otp_id')
              .then(res => {
                // console.log(res);

                if (res) {
                  console.log({
                    msg: 'OTP Admission Added'
                  })
                }
              })
          }
        })
        .catch(e => {
          reject(e);
        })
    })
    resolve('OTP Added')
  })

}

module.exports.updateOtp = function (otpUpd, knex) {

  // var data = req.body;
  return new Promise((resolve, reject) => {

    otpUpd.forEach(data => {
      data.client_otp_id = data.otp_id;
      delete data.otp_id;
      // resp.json(data);
      console.log(data);
      knex('tblOtpAdd')
        .where({
          client_id: data.client_id,
          client_otp_id: data.client_otp_id
        })
        .update(data)
        .then(result => {
          if (result) {
            console.log({
              msg: 'OTP Admission Updated'
            })
          } else {
            console.log({
              msg: 'OTP Admission Not Updated'
            })
          }
        })

        .catch(e => {
          reject(e)
        })
    })
    resolve('OTP Updated')
  })

}

module.exports.uploadOtpExit = function (otpExit, knex) {

  return new Promise((resolve, reject) => {

    otpExit.forEach(data => {
      data.client_otp_id = data.otp_id;
      delete data.otp_id;
      delete data.exit_id;
      // resp.json(data);
      console.log(data);
      knex('tblOtpExit')
        .where({
          client_id: data.client_id,
          client_otp_id: data.client_otp_id
        })
        .then(result => {
          if (result.length > 0) {
            console({
              msg: 'OTP Exit already exists'
            })
          } else {
            knex('tblOtpExit')
              .insert(data)
              .returning('client_otp_id')
              .then(res => {
                var test = {
                  msg: 'OTP Exit Added',
                  confirm: 1
                }
                console.log(test);
              })
          }
        })
        .catch(e => {
          reject(e);
        })
    })
    resolve('OTP Exit Added')
  })


}

module.exports.updateOtpExit = function(otpExitUpd, knex){
  return new Promise((resolve, reject)=>{

    otpExitUpd.forEach(data=>{
      data.client_otp_id = data.otp_id;
      delete data.otp_id;
      delete data.exit_id;
      // resp.json(data);
      console.log(data);
      knex('tblOtpExit')
        .where({
          client_id: data.client_id,
          client_otp_id: data.client_otp_id
        })
        .update(data)
        .then(result => {
          if (result) {
            console.log({
              msg: 'OTP Exit Updated'
            })
          } else {
            console.log({
              msg: 'OTP Exit Not Updated'
            })
          }
        })  
        .catch(e => {
          reject(e)
  
        })
    })
    resolve('OTP exit updated')
  })
  

}

module.exports.uploadFollowup = function(followup, knex){
  return new Promise((resolve, reject)=>{
    followup.forEach(data=>{
    data.client_followup_id = data.followup_id;
    data.client_otp_id = data.otp_id;
    delete data.otp_id;    
    delete data.followup_id;
    // resp.json(data);
    console.log(data);
    knex('tblOtpFollowup')
      .where({client_id: data.client_id, client_followup_id: data.client_followup_id})
      .then(result=>{
        if(result.length > 0 ){
          console.log({msg: 'followup already exists'})
        }else{
          knex('tblOtpFollowup')
                .insert(data)
                .returning('client_followup_id')
                .then(res=>{
                  console.log(res);
                  if(res){          
                    console.log({msg: 'Followup Added'})      
                  }
                })
        }
      })     
      .catch(e=>{
        reject(e)
      })
    })
    resolve('Followups Added')
  })
}

module.exports.uploadSession = function(sessions, knex){
  return new Promise((resolve, reject)=>{
    sessions.forEach(data=>{
      data.client_session_id = data.session_id;
      delete data.session_id;
          // resp.json(data);
  
      console.log(data);
      knex('tblSessions')
        .where({client_id: data.client_id, client_session_id: data.client_session_id})
        .then(result=>{
          if(result.length > 0 ){
            console.log({msg: 'Session already exists'})
          }else{
            knex('tblSessions')
                  .insert(data)
                  .returning('client_session_id')
                  .then(res=>{
                    console.log(res);
                    if(res){          
                      console.log({msg: 'Session Added'})      
                    }
                  })
          }
        })     
        .catch(e=>{
          reject(e)
        })
    })
    resolve('Sessions uploaded')
  })
}
module.exports.updateSession = function(sessionUpd, knex){
  return new Promise((resolve, reject)=>{
    sessionUpd.forEach(data=>{
      data.client_session_id = data.session_id;
      delete data.session_id;
      // resp.json(data);
      console.log(data);
      knex('tblSessions')
        .where({client_id: data.client_id, client_session_id: data.client_session_id})
        .update(data)      
        .then(result=>{
          if(result ){
            console.log({msg: 'Session Updated'})
          }else{
            console({msg: 'Session Not Updated'})
          }
        }) 
        
        .catch(e=>{
          reject(e)
        })
    })
    resolve('Sessions Updated')
  })
}














