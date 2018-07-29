const UserDetail = require("../models/userDetail");
const User = require("../models/user");
const Gatherings = require("../models/gatherings");


const getUserInfo = (req,res)=> {
    const UserInfo = {
        "gatheringsAdmin" : getGatheringAdmin,
        "gatheringsInvited" : getGatheringInvited,
        "username" : getGatheringAdmin,
        "email" : getGatheringAdmin,
    }
    console.log("Did I come here!");
    const querys = req.query.q.split(" ");
    if(querys.length > 10){
        return new Error("Query is too Long!");
    }
    
    for (let i = 0; i < querys.length; i++) {
        const query = querys[i];
        if (UserInfo.hasOwnProperty(query)){
            UserInfo[query](req,res);
        }
        
    }

}


const getGatheringAdmin = (req,res) => {
    const userID = req.user.userID;

    UserDetail.find({User:userID}).
    populate("Gathering")
    .then((res,err)=>{
        console.log(res);
    })
}

const getGatheringInvited = (req,res) => {

}

const getUsername = (req,res) => {
    
}

const getEmail = (req,res) => {
    
}


module.exports = {getUserInfo}