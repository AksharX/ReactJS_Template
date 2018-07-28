log = require("loglevel");
const userController = require('../controllers/users')
//Models
const User = require("../models/user");



module.exports = function(app) {
    
    app.get('/signin',userController.signin);
    app.post('/signup',userController.signup);

    
  
  }