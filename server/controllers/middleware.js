const { verifyJWTToken } = require('./tokens_Controller');

const verifyJWT_MW = (req, res, next) =>
{
  let token = (req.method === 'POST') ? req.body.token : req.headers.authorization
  verifyJWTToken(token)
    .then((decodedToken) =>
    {
      req.user = decodedToken.data
      next()
    })
    .catch((err) =>
    {
      res.status(400)
        .json({message: "Invalid auth token provided."})
    })
}

const verify_Correct_Access_MW = (req,res,next) =>
{
  console.log(req.user.userID)
  console.log(req.params.userID)
  if(req.user.userID !== req.params.userID){
    res.status(500).json({
      error: "You can not access this part of the API"
    })
  } else{
    next();
  }
}




module.exports = {verifyJWT_MW, verify_Correct_Access_MW};