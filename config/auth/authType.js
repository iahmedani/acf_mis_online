const orSuper = (req)=>{
    return (req.isAuthenticated() && req.user.auth_type === 'super')
}

module.exports.isSuperAdmin = function (req, res, next) {
    if (req.isAuthenticated() && req.user.auth_type === 'super') {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}
module.exports.isAdminProg = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'admin' && !req.user.isCp && req.user.unit === 'program') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}

module.exports.isEditProg = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'editor' && !req.user.isCp && req.user.unit === 'program') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}
module.exports.isViewProg = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'viewer' && !req.user.isCp && req.user.unit === 'program') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}
module.exports.isAdminProgCp = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'admin' && req.user.isCp && req.user.unit === 'program') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}

module.exports.isEditProgCp = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'editor' && req.user.isCp && req.user.unit === 'program') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}
module.exports.isViewProgCp = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'viewer' && req.user.isCp && req.user.unit === 'program') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}
module.exports.isAdminLog = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'admin' && !req.user.isCp && req.user.unit === 'log') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}

module.exports.isEditLog = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'editor' && !req.user.isCp && req.user.unit === 'log') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}
module.exports.isViewLog = function (req, res, next) {
    if ((req.isAuthenticated() && req.user.auth_type === 'viewer' && !req.user.isCp && req.user.unit === 'log') || orSuper(req)) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.status(401).json({msg:'un-authorized'})
    }
}
module.exports.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('warning', 'You are not authorized')
        res.redire('/new_admin/signin')
    }
}
