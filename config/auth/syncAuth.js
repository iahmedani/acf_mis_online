const { knex } = require('../db.js');

module.exports = (req, res, next) => {
  // next();
  var macAddr = req.headers.authorization.split(' ')[2].toLowerCase();
  var appKey = req.headers.authorization.split(' ')[1].toLowerCase();
  // console.log({
  //   macAddr: macAddr,
  //   appKey: appKey
  // })
  knex('tblAppBinding')
    .where({ mac: macAddr, regKey: appKey })
    .then(result => {
      // console.log(result)
      if (result.length > 0) {        
        next();
      } else {
        res.json({msg: 'unregistered app'})
      }
    })
    .catch(e => {
      // console.log(e)
      res.json({msg: false})
    })
}