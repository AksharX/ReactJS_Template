const User = require("../models/user");
const log = require('loglevel')

const UserController = {
    signup : function(req, res){
        const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        });
        
        user
        .save()
        .then(result =>{
            log.trace(result);
            res.status(201).json({
            message: "User Created",
            userInfo: result
            })
        })
        .catch(err => {
            log.error(err)
            res.status(500).json({
            error :err.message
            });
        })
    },

    signin : function(req,res){
        log.trace("Sign In!")
    },

    logout : null,



}

module.exports = UserController;

const SIGNUP = function (req, res) {
    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    });
        
    user
    .save()
    .then(result =>{
        log.trace(result);
        res.status(201).json({
        message: "User Created",
        userInfo: result
        })
    })
    .catch(err => {
        log.error(err)
        res.status(500).json({
        error :err.message
        });
    })
}

const SIGNIN = function(params){
    
}