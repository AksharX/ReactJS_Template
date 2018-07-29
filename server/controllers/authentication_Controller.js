const User = require("../models/user");
const UserDetail = require("../models/userDetail");
const log = require('loglevel');
const {createJWTToken, verifyJWTToken} = require('./tokens_Controller');


const SIGNUP = function (req, res) {
    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    });
    
        
    user
    .save()
    .then(result1 =>{
        
        
        const userdetail = new UserDetail({
            User: user.id
        })

        userdetail.save().then(result2=>{
            log.info(result);
        }).catch(err =>{
            log.warn(err.message);
            res.status(500).json({
            error :err.message
            });
        })
        res.status(201).json({
            message: "User Created",
            userInfo: result1
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
    const {username, password} = req.body

    User.findOne({username:username},(err,user)=>{
        if(err){
            res.status(500).json({
                error: "Internal Error!"
            })
            return;
        }
        
        if (!user){
            res.status(404).json({
                error: "User not Found!"
            })
            return;
        }

        if(user.comparePassword(password)){
            
            payload = {
                userID : user.id,
            }
            const token = createJWTToken(
                {
                    sessionData:payload,
                    maxAge: "365 days"
                }
            )

            req.headers.authorization = token;
            res.status(200).json({
                success: "You logged in!",
                token: token
            
            })
        }
    })


}



const UserController = {
    signup : SIGNUP,
    signin : SIGNIN,
    
}

module.exports = UserController;

