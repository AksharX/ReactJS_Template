const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');


const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
require('./server/app/routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});

