log = require("loglevel");

//Models
const User = require("../models/user");



module.exports = function(app, db) {
    app.get('/api', (req, res, err) => {
      res.status(200).json({message:"Accessing API"})
    });

    
    app.post('/register', (req, res) => {
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
    })
  }