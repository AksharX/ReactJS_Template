const authenticationRoute = require('./authentication_Route');
const apiRoute = require("./api_Route");

module.exports = function(app) {
  authenticationRoute(app);
  apiRoute(app)
};
