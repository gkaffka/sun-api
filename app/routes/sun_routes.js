const dayController = require("../controllers/day_controller");
const temperatureController = require("../controllers/temperature_controller");

module.exports = function(app) {

      app.post('/day', dayController.create);  

      app.put('/day', dayController.update);

      app.get('/day', dayController.fetch);

      app.post('/temperature', temperatureController.create);  
      
      app.get('/temperature', temperatureController.fetch);
};