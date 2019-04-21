const
    express = require('express'),
    router = express.Router(),
    DB = require('../config/auth/DB'),
    validateRegisterInput = require('../config/validation/registerUser'),
    passport = require('passport'),
    passportConf = require('../config/auth/passport');

    const isAdminLoggedIn = function(req, res, next) {
        if (req.isAuthenticated() && req.user.auth_type === 'super') {
          next();
        } else {
          req.flash('info', 'Must be admin to access the page');
          res.status(401).json({msg:'Un-authorized'})
        }
      };

router.get('/signup',(req, res)=>{
    if(req.user){
        res.json({msg:'You can add user'})
    }else{

        res.render('admin/signup')
    }
})
router.post('/signup', (req, res) => {
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body);
    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    var newUser = req.body;
    newUser.isCp = (newUser.isCp == 'on')? true: false
    console.log(newUser)
    delete newUser.password2;

    DB.createUser(req.body)
        .then(user => {
            res.json({
                msg: `user ${user} is sucessfully registered`
            })
        })
        .catch(e => {
            if (e.number === 2601) {
                res.status(400).json({
                    msg: 'Email already exists'
                });
            } else {
                res.status(400).json(e);
            }
        })

});
router.get('/signin',(req,res)=>{
    // if(req.user){
    //     res.status(200).json(req.user)
    // }else{
    //     res.status(404).json({msg:'Incorrect username or password'})
    res.render('admin/signin')
    // }
    // res.json({msg:'Sign In'})
})
router.post('/signin',passport.authenticate('local'),(req,res)=>{
    if(req.user){
        res.redirect('/')
    }else{
        res.status(404).json({msg:'Incorrect username or password'})
        res.redirect('/new_admin/signin')
    }

})
router.post('/signout',(req,res)=>{
    req.logOut();
    req.flash('success','sucessfully logout');
    res.redirect('/')

})
router.get('/signout',(req,res)=>{
    req.logOut();
    req.flash('success','sucessfully logout');
    res.redirect('/')

})

module.exports = router;