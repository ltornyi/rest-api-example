var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var massive = require('massive');
var dbConfig = require('epa').getEnvironment()._config;
var controllers = require('./controllers');

var app = express();
app.use( morgan('dev'), bodyParser.json());

//db
var massiveInstance = massive.connectSync(dbConfig);
app.set('db', massiveInstance);

//controllers
app.use(controllers);

app.listen(3000, function(){
    console.log('Listening on port 3000...');
});
