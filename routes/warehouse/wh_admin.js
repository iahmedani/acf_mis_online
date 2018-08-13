const express = require('express');
const router = express.Router();
const isAdminLog = require('../../config/auth/authType').isAdminLog;

router.get('/',isAdminLog,(req,res)=>{
    res.json({msg:'warehouse admin'})
})

module.exports = router;