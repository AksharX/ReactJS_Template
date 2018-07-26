const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
let   db             = require('./config/db');
const path           = require('path');
const mongoose       = require("mongoose");

const port = 8000;

mongoose.connect(db.testuri,{useNewUrlParser:true});

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.testuri, {useNewUrlParser:true}, (err, database) => {
  if (err) return console.log(err)
  
  db = database.db("testdatabase")
  require('./server/routes')(app, db);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})

