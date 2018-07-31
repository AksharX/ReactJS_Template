const jwt = require("jsonwebtoken");

const verifyJWTToken = (token) => 
{
    return new Promise((resolve, reject)=>{
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken) =>
        {
            if (err||!decodedToken)
            {
                return reject(err);
            }
            
            resolve(decodedToken)
        })
    })
}


const createJWTToken = (details)=>
{
    if (typeof details !== 'object')
    {
      details = {};
    }
    
    if (!details.maxAge)
    {
      details.maxAge = "3 days";
    }
    
    
    let token = jwt.sign({
       data: details.sessionData
      }, process.env.JWT_SECRET, {
        expiresIn: details.maxAge,
        algorithm: 'HS256'
    })
    return token;
}

module.exports = {verifyJWTToken,createJWTToken};