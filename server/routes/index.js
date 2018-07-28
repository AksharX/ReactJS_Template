const usersRoute = require('./users');
module.exports = function(app) {
  usersRoute(app);
  // Other route groups could go here, in the future
};
