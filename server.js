const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
let   db             = require('./config/db');
const path           = require('path');



const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, {useNewUrlParser:true}, (err, database) => {
  if (err) return console.log(err)
  
  db = database.db("akshar_patel_database")
  require('./server/app/routes')(app, db);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.use(express.static("build"));

