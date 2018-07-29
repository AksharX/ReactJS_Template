log = require("loglevel");
const userController = require('../controllers/authentication_Controller')
const { verifyJWT_MW } = require("../controllers/middleware")
const User = require("../models/user");



module.exports = function(app) {
    app.post('/signin',userController.signin);
    app.post('/signup',userController.signup);
  }