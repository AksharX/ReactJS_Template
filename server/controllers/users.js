const User = require("../models/user");
const log = require('loglevel')

const SIGNUP = function (req, res) {
    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    });
        
    user
    .save()
    .then(result =>{
        log.info(result);
        res.status(201).json({
        message: "User Created",
        userInfo: result
        })
    })
    .catch(err => {
        log.warn(err.message);
        res.status(500).json({
        error :err.message
        });
    })
}

const SIGNIN = function(req, res){
    
}











const UserController = {
    signup : SIGNUP,
    signin : SIGNIN,
    
}

module.exports = UserController;

