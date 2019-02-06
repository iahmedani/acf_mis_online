var {knex} = require('../db.js')
const bcrypt = require('bcryptjs');

module.exports.findUserByUsername = (email)=>{
    return new Promise((resolve, reject)=>{
        knex('tblUsers')
            .where({email})
            .then(user=>resolve(user[0]))
            .catch(err=>reject(err));
    })
}
module.exports.checkPassword = (givenPass, hashPass)=>{
    console.log('iscalled')
    return bcrypt.compareSync(givenPass, hashPass)
}
module.exports.createUser = (newUser)=>{
    return new Promise((resolve, reject)=>{
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        knex('tblUsers')
            .insert(newUser)
            .returning('email')
            .then(userEmail =>resolve(userEmail))
            .catch(error=>reject(error))
    })
}