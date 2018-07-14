var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
 
    app.post('/sunrise', (req, res) => {
        const time = { sunrise: req.body.hour};
        db.collection('sun').insert(time, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops[0]);
          }
        });
      });

      app.post('/sunset', (req, res) => {
        const time = { sunrset: req.body.hour};
        db.collection('sun').insert(time, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops[0]);
          }
        });
      });  

      app.put('/sunset', (req, res) => {
        const id = '5b4a2022970fa9042b9af188';
        const details = { '_id': new ObjectID(id) };
        const time = { sunset: req.body.hour };
        db.collection('sun').update(details, time, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(time);
          } 
        });
      });

      app.put('/sunrise', (req, res) => {
        const id = '5b4a2019970fa9042b9af187';
        const details = { '_id': new ObjectID(id) };
        const time = { sunrise: req.body.hour };
        db.collection('sun').update(details, time, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(time);
          } 
        });
      });

      app.get('/sunrise', (req, res) => {
        const details = { '_id': new ObjectID('5b4a2019970fa9042b9af187') };
        db.collection('sun').findOne(details, (err, item) => {
            if (err) {
              res.send({'error':'An error has occurred'});
            } else {
              res.send(item);
            }
          });
      });

      app.get('/sunset', (req, res) => {
        const details = { '_id': new ObjectID('5b4a2022970fa9042b9af188') };
        db.collection('sun').findOne(details, (err, item) => {
            if (err) {
              res.send({'error':'An error has occurred'});
            } else {
              res.send(item);
            }
          });
      });
};