const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const mongoose       = require("mongoose");
const app            = express();

const morgan         = require("morgan");
const bodyParser     = require('body-parser');

const db             = require('./config/db');
const config         = require("./config/config");
const path           = require('path');

const port = 8000;

const database = mongoose.connect(db.testuri,{useNewUrlParser:true})
  .then(
    ()=>{
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(morgan("dev"));
      require("./server/routes")(app);
      
      app.listen(port);
      console.log('Magic happens at http://localhost:' + port);
      
    },
    err =>{
      log.error("Failed to Connect")
    }
  )


