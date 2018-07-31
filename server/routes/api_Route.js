const { verifyJWT_MW, verify_Correct_Access_MW } = require("../controllers/middleware");
const { getUserInfo, postUserInfo } = require("../controllers/api_Controller");

module.exports = function(app) {
    
    app.all("/api/*",verifyJWT_MW);

    app.all("/api/users/:userID/*",verify_Correct_Access_MW);

    app.get("/api/users/:userID/info?",getUserInfo);

    app.post("/api/users/:userID/create?",postUserInfo);

    app.post("/api/*",(req,res)=>{
      res.status(200).json({
        success: "You have access to my API",
        userID: req.user.userID
      });
    });
  
}