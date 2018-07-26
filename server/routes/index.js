const authenticationRoute = require('./authenticationRoute');
module.exports = function(app, db) {
  authenticationRoute(app, db);
  // Other route groups could go here, in the future
};
