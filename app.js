var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var port = 3001;
var route = require('./routes/coverages');
var controller = require('./controllers/coverageIdSummary');
app.use(bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' }));
app.use(bodyParser.urlencoded(bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' })));
//var dbwrap = require('./dbWrapper');

/*module.exports={
    mongoConnection: dbwrap.mongoConnection
}*/
var db = require('./database/configdb1');

db.connect('mongodb://localhost:27017/bff', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    console.log("db connection established")
  }
})


app.get('/test', controller.getCov);


app.listen(port,function(err){
    if(err) return;
    console.log("Server started at Port" + port );
})