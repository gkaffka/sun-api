const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('./config/db');
var db = require('./app/db')

var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

db.connect(dbConfig.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})