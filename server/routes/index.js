const usersRoute = require('./users');
module.exports = function(app, db) {
  usersRoute(app, db);
  // Other route groups could go here, in the future
};
