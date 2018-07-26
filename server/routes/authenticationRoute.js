

//Models
const User = require("../models/user");



module.exports = function(app, db) {
    app.get('/api',requiresLogin, (req, res, err) => {
      res.status(200).json({message:"Accessing API"})
    });

    
    app.post('/register', (req, res) => {
      const user = User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
      });

      user
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "User Creation Successful",
            userInfo: result
          })
        
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    });
  };
  
  function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      console.log("Should not be accessing this")
      return next();
    }
  }