const sunRoutes = require('./sun_routes');
module.exports = function(app, db) {
    sunRoutes(app, db);
  // Other route groups could go here, in the future
};