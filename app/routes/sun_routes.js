var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
      
      app.post('/day', (req, res) => {
        const time = { sunrise: req.body.sunrise, sunrset: req.body.sunset};
        db.collection('sun').insert(time, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops[0]);
          }
        });
      });  

      app.put('/day', (req, res) => {
        const id = '5b4a4f47e74e3f0cb4fa8dbb';
        const details = { '_id': new ObjectID(id) };
        const time = { sunrise: req.body.sunrise,  sunset: req.body.sunset };
        db.collection('sun').update(details, time, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(time);
          } 
        });
      });

      app.get('/day', (req, res) => {
        const details = { '_id': new ObjectID('5b4a4f47e74e3f0cb4fa8dbb') };
        db.collection('sun').findOne(details, (err, item) => {
            if (err) {
              res.send({'error':'An error has occurred'});
            } else {
              res.send(item);
            }
          });
      });
};