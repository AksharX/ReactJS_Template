const UserDetail = require("../models/userDetail");
const User = require("../models/user");
const Gatherings = require("../models/gatherings");
const log = require('loglevel');


const getUserInfo = (req,res)=> {
    const UserInfo = {
        "gatheringsAdmin" : getGatheringAdmin,
        "gatheringsInvited" : getGatheringInvited,
        "username" : getUsername,
        "email" : getEmail,
    };
    log.debug((req.query.q));
    performQueryLookup(req,res,UserInfo);

};

const postUserInfo = (req,res)=> {
    const UserCreate = {
        "gathering" : createGathering,
    };
    
    performQueryLookup(req,res,UserCreate);

};


const performQueryLookup = (req,res,functionObj)=>{
    
    if(!req.query.q) return new Error("Query is not defined");
    
    if (typeof req.query.q !== 'string') return new Error("Query should needs to be string!");
    
    const querys = req.query.q.split(" ");
    
    if(querys.length > 10){
        return new Error("Query is too Long!");
    }
    
    querys.map( q => {
        if(functionObj.hasOwnProperty(q)) functionObj[q](req,res);
    });
};



const getGatheringAdmin = (req,res) => {
    getGathering(req,res,"gatheringsAdmin");
};

const getGatheringInvited = (req,res) => {
    getGathering(req,res,"gatheringsInvited");
};

const getGathering = (req,res,attribute)=>{
    const userID = req.user.userID;
    
    UserDetail.find({User:userID})
    .populate(attribute).exec((err,g)=>{
        if (err) new Error("Internal Error");
        res.status(200).json({
            Success : "Got Users " + attribute,
            gatherings : g[0][attribute]
        });
    });
};

const getUsername = (req,res) => {
    log.debug("getting Username");
};

const getEmail = (req,res) => {
    log.debug("getting EMAIL");
};

const createGathering = (req,res)=>{
    log.debug("Creating Gathering for: " + req.user.userID);
    const userID = req.user.userID;
    
    gathering = new Gatherings({
        name:req.body.name,
        adminMembers:[userID],
        members: [userID],
        location: req.body.location,
        date: Date.now()
    });

    gathering.save()
    .then((result)=>{
        
        UserDetail.findOneAndUpdate({User:userID},{$push:{gatheringsAdmin:gathering.id}},(err,userdata)=>{
            log.debug("Insertedd User as Admin for Gathering");
            res.status(201).json({
                success: "Created Gathering",
                gathering: gathering.toJSON(),
                UserDetail: userdata.toJSON()
            });
        });
    })
    .catch((err)=>{
        res.status(400).json({
            error: err.message
        });
    });

};


module.exports = {getUserInfo,postUserInfo}