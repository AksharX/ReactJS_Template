log = require("loglevel");
const userController = require('../controllers/users')
//Models
const User = require("../models/user");



module.exports = function(app, db) {
    app.get('/signin', (req, res, err) => {
      
    });

    app.post('/signup', userController.signup);
  
  
  }