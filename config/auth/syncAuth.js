const knex = require('../../db/knex');

module.exports = (req, res, next) => {
  var macAddr = req.headers.authorization.split(' ')[1]
  var appKey = req.headers.authorization.split(' ')[2]
  console.log({
    macAddr: macAddr,
    appKey: appKey
  })
  knex('tblAppBinding')
    .where({ mac: macAddr, regKey: appKey })
    .then(result => {
      console.log(result)
      if (result.length > 0) {        
        next();
      } else {
        res.status(401).json({msg: 'unregistered app'})
      }
    })
    .catch(e => {
      console.log(e)
      res.json({msg: false})
    })
}