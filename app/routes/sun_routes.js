const dayController = require("../controllers/day_controller");

module.exports = function(app) {

      app.post('/day', dayController.post);  

      app.put('/day', dayController.put);

      app.get('/day', dayController.get);
};