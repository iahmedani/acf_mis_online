function date_diff_indays (d1, d2) {
  var diff = Date.parse(d2) - Date.parse(d1);
  return Math.floor(diff / 86400000);
}
module.exports.date_diff_indays = date_diff_indays

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
  var _x = new Date().toJSON().split('T')[0];
  return new Promise((resolve, reject) => {
    otpAdd.forEach(data => {
      data.client_otp_id = data.otp_id;
      data.upload_date = _x
      delete data.otp_id;
      delete upload_status;
      data.quantity2 = (data.quantity2 == '') ? 0: data.quantity2;
      data.quantity3 = (data.quantity3 == '') ? 0: data.quantity3;
      data.other_com_qty = (data.other_com_qty == '') ? 0: data.other_com_qty;
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
          console.log(e)
          reject(e);
        })
    })
    resolve('OTP Added')
  })

}

module.exports.updateOtp = function (otpUpd, knex) {
  var _x = new Date().toJSON().split('T')[0];

  // var data = req.body;
  return new Promise((resolve, reject) => {

    otpUpd.forEach(data => {
      if(date_diff_indays(data.upload_date, _x) < 6){

        data.client_otp_id = data.otp_id;
        delete data.otp_id;
        data.quantity2 = (data.quantity2 == '') ? 0: data.quantity2;
        data.quantity3 = (data.quantity3 == '') ? 0: data.quantity3;
        data.other_com_qty = (data.other_com_qty == '') ? 0: data.other_com_qty;
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
      }
    })
    resolve('OTP Updated')
  })

}

    var _x = new Date().toJSON().split('T')[0];
module.exports.uploadOtpExit = function (otpExit, knex) {
  console.log(otpExit)
  return new Promise((resolve, reject) => {
    var _x = new Date().toJSON().split('T')[0];
    otpExit.forEach(data => {

      data.client_otp_id = data.otp_id;
      delete data.otp_id;
      delete data.exit_id;
      data.exit_quantity2 = (data.exit_quantity2 == '') ? 0: data.exit_quantity2;
      data.exit_quantity3 = (data.exit_quantity3 == '') ? 0: data.exit_quantity3;
      data.exit_other_com_qty = (data.exit_other_com_qty == '') ? 0: data.exit_other_com_qty;
      data.upload_date = _x;
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

module.exports.updateOtpExit = function (otpExitUpd, knex) {
  return new Promise((resolve, reject) => {
    var _x = new Date().toJSON().split('T')[0];
    otpExitUpd.forEach(data => {
      if(date_diff_indays(data.upload_date, _x) <6){
        data.client_otp_id = data.otp_id;
        delete data.otp_id;
        delete data.exit_id;
        data.exit_quantity2 = (data.exit_quantity2 == '') ? 0: data.exit_quantity2;
        data.exit_quantity3 = (data.exit_quantity3 == '') ? 0: data.exit_quantity3;
        data.exit_other_com_qty = (data.exit_other_com_qty == '') ? 0: data.exit_other_com_qty;
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

      }
    })
    resolve('OTP exit updated')
  })


}

module.exports.uploadFollowup = function (followup, knex) {
  var _x = new Date().toJSON().split('T')[0]
  return new Promise((resolve, reject) => {
    followup.forEach(data => {
      data.client_followup_id = data.followup_id;
      data.client_otp_id = data.otp_id;
      delete data.otp_id;
      delete data.followup_id;
      delete data.upload_status;
      data.upload_date = _x;
      
      data.quantity2 = (data.quantity2 == '') ? 0: data.quantity2;
      data.quantity3 = (data.quantity3 == '') ? 0: data.quantity3;
      data.other_com_qty = (data.other_com_qty == '') ? 0: data.other_com_qty;
      // resp.json(data);
      console.log(data);
      knex('tblOtpFollowup')
        .where({
          client_id: data.client_id,
          client_followup_id: data.client_followup_id
        })
        .then(result => {
          if (result.length > 0) {
            console.log({
              msg: 'followup already exists'
            })
          } else {
            knex('tblOtpFollowup')
              .insert(data)
              .returning('client_followup_id')
              .then(res => {
                console.log(res);
                if (res) {
                  console.log({
                    msg: 'Followup Added'
                  })
                }
              })
          }
        })
        .catch(e => {
          reject(e)
        })
    })
    resolve('Followups Added')
  })
}

module.exports.uploadStockRequest = function (followup, knex) {
  return new Promise((resolve, reject) => {
    followup.forEach(data => {
      // data.upload_status = data.otp_id;
      delete data.id;
      delete data.upload_status;
      // resp.json(data);
      console.log(data);
      knex('tblStockReuest')
        .where({
          client_id: data.client_id,
          req_id: data.req_id
        })
        .then(result => {
          if (result.length > 0) {
            console.log({
              msg: 'followup already exists'
            })
          } else {
            knex('tblStockReuest')
              .insert(data)
              .returning('req_id')
              .then(res => {
                console.log(res);
                if (res) {
                  console.log({
                    msg: 'Stock Request Added'
                  })
                }
              })
          }
        })
        .catch(e => {
          reject(e)
        })
    })
    resolve('Stock Request Added')
  })
}

module.exports.uploadSession = function (sessions, knex) {
  return new Promise((resolve, reject) => {
    sessions.forEach(data => {
      data.client_session_id = data.session_id;
      delete data.session_id;
      data.CHS_id = (data.CHS_id == '')? 0 : data.CHS_id;
      data.CHW_id = (data.CHW_id == '')? 0 : data.CHW_id;
      data.upload_date = new Date().toJSON().split('T')[0]
      // resp.json(data);

      console.log(data);
      knex('tblSessions')
        .where({
          client_id: data.client_id,
          client_session_id: data.client_session_id
        })
        .then(result => {
          if (result.length > 0) {
            console.log({
              msg: 'Session already exists'
            })
          } else {
            knex('tblSessions')
              .insert(data)
              .returning('client_session_id')
              .then(res => {
                console.log(res);
                if (res) {
                  console.log({
                    msg: 'Session Added'
                  })
                }
              })
          }
        })
        .catch(e => {
          reject(e)
        })
    })
    resolve('Sessions uploaded')
  })
}
module.exports.updateSession = function (sessionUpd, knex) {
  return new Promise((resolve, reject) => {
    sessionUpd.forEach(data => {
      if(date_diff_indays(data.upload_date, new Date().toJSON().split('T')[0]) < 6){
        data.upload_date = new Date().toJSON().split('T')[0]
        data.client_session_id = data.session_id;
        delete data.session_id;
        data.CHS_id = (data.CHS_id == '')? 0 : data.CHS_id;
        data.CHW_id = (data.CHW_id == '')? 0 : data.CHW_id;
        // resp.json(data);
        console.log(data);
        knex('tblSessions')
          .where({
            client_id: data.client_id,
            client_session_id: data.client_session_id
          })
          .update(data)
          .then(result => {
            if (result) {
              console.log({
                msg: 'Session Updated'
              })
            } else {
              console({
                msg: 'Session Not Updated'
              })
            }
          })
  
          .catch(e => {
            reject(e)
          })
      }
    })
    resolve('Sessions Updated')
  })
}

module.exports.uploadNewScrCh = function (newScrChArr, knex) {
  var newArr = [];
  newScrChArr.forEach(el => {
    el.client_scr_ch_id = el.ch_scr_id;
    delete el.ch_scr_id;
    el.upload_date = new Date().toJSON().split('T')[0]
    newArr.push(el);
  });
  console.log(newArr)
  return new Promise((resolve, reject) => {
    knex('tblScrChildren')
      .insert(newArr)
      .returning('client_scr_ch_id')
      .then(ids => {
        if (ids.length > 0) {
          console.log({
            msg: `Children screening with ids: ${ids} have been uploaded`
          })
          resolve('Children screening uploaded')
        } else {
          console.log({
            msg: `Children screening could not be uploaded`
          })

        }
      })
      .catch(error => reject(error))
  })
}

module.exports.updateNewScrCh = function (newScrChUpd, knex) {
  var newArr = [];
  var _x = new Date().toJSON().split('T')[0]
  newScrChUpd.forEach(el => {
    el.client_scr_ch_id = el.ch_scr_id;
    delete el.ch_scr_id;
    if(date_diff_indays(el.upload_date, _x) < 6){
      el.upload_date = _x;
      newArr.push(el);
    }
  });
  return new Promise((resolve, reject) => {
    var newResponse = {
      id: [],
      errors: []
    }
    newArr.forEach(el => {
      knex('tblScrChildren')
        .update(el)
        .where({
          'client_scr_ch_id': el.client_scr_ch_id
        })
        .returning('client_scr_ch_id')
        .then(up_id => {
          if (up_id.length > 0) {
            console.log({
              msg: `Children screening with up_id: ${up_id} have been uploaded`,
              ids: up_id
            })
            newResponse.id.push(up_id);
            // resolve('Children screening uploaded')
          } else {
            console.log({
              msg: `Children screening could not be uploaded`
            })

          }
        })
        .catch(error => newResponse.errors.push(error));

    })
    if (newResponse.errors.length > 0) {
      reject('Children screening failed')
    } else {
      resolve(`Children Screening record(s) updated`)
    }
  })
}

module.exports.uploadNewScrPlw = function (newScrPlwArr, knex) {
  var newArr = [];
  newScrPlwArr.forEach(el => {
    el.client_scr_plw_id = el.plw_scr_id;
    delete el.plw_scr_id;
    el.upload_date = new Date().toJSON().split('T')[0]
    newArr.push(el);
  });
  console.log(newArr)
  return new Promise((resolve, reject) => {
    knex('tblScrPlw')
      .insert(newArr)
      .returning('client_scr_plw_id')
      .then(ids => {
        if (ids.length > 0) {
          console.log({
            msg: `PLW screening with ids: ${ids} have been uploaded`
          })
          resolve('PLW screening uploaded')
        } else {
          console.log({
            msg: `PLW screening could not be uploaded`
          })

        }
      })
      .catch(error => reject(error))
  })
}

module.exports.updateNewScrPlw = function (newScrPlwUpd, knex) {
  var newArr = [];
  var _x = new Date().toJSON().split('T')[0]

  newScrPlwUpd.forEach(el => {
    el.client_scr_plw_id = el.plw_scr_id;
    delete el.plw_scr_id;
    if(date_diff_indays(el.upload_date, _x) < 6){
      el.upload_date = _x;
      newArr.push(el);
    }
  });
  return new Promise((resolve, reject) => {
    var newResponse = {
      id: [],
      errors: []
    }
    newArr.forEach(el => {
      knex('tblScrPlw')
        .update(el)
        .where({
          'client_scr_plw_id': el.client_scr_plw_id
        })
        .returning('client_scr_plw_id')
        .then(up_id => {
          if (up_id.length > 0) {
            console.log({
              msg: `PLW screening with up_id: ${up_id} have been updated`,
            })
            newResponse.id.push(up_id);
            // resolve('Children screening uploaded')
          } else {
            console.log({
              msg: `PLW screening could not be uploaded`
            })

          }
        })
        .catch(error => newResponse.errors.push(error));

    })
    if (newResponse.errors.length > 0) {
      reject('PLW screening failed')
    } else {
      resolve(`PLW Screening record(s) updated`)
    }
  })
}

module.exports.uploadStockIn =  async function( tblStock, knex){
  var newStock = [];
  for (stock of tblStock){
    stock.client_stockIn_id = stock.id;
    delete stock.id;
    newStock.push(stock);
  }
  return new Promise((resolve, reject)=>{
    var newResponse = {
      id: [],
      errors: []
    }
    for (stock of newStock){
        knex('tblStok')
          .insert(stock)
          .whereNot({client_stockIn_id: stock.client_stockIn_id, clien_id:stock.client_id})
          .then(result=>{
            if(result.length > 0 ){
             newResponse.id.push(result)
            }
          })
          .catch(error => newResponse.errors.push(error));
    }
    if(newResponse.errors.length > 0){
      reject('Stock upload failed')
    }else{
      resolve('Stocks are uploaded')
    }
  })
}
module.exports.updateStockIn =  async function( tblStock, knex){
  var newStock = [];
  for (stock of tblStock){
    stock.client_stockIn_id = stock.id;
    delete stock.id;
    newStock.push(stock);
  }
  return new Promise((resolve, reject)=>{
    var newResponse = {
      id: [],
      errors: []
    }
    for (stock of newStock){
        knex('tblStok')
          .update(stock)
          .where({client_stockIn_id: stock.client_stockIn_id, clien_id:stock.client_id})
          .then(result=>{
            if(result.length > 0 ){
             newResponse.id.push(result)
            }
          })
          .catch(error => newResponse.errors.push(error));
    }
    if(newResponse.errors.length > 0){
      reject('Stock Update failed')
    }else{
      resolve('Stocks are updated')
    }
  })
}
//Stocks
