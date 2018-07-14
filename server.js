const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  const mongodb = database.db("sun")
  require('./app/routes')(app, mongodb);
  
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})