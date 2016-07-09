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

if (process.argv.length===3 && process.argv[2]==='install') {
    var fs = require('fs');
    var path = require('path');
    var buildDir = path.join(__dirname, './build');
    var sqlFile = path.join(buildDir,'install.sql');
    var sql = fs.readFileSync(sqlFile,{encoding : 'utf-8'});
    massiveInstance.runSync(sql);
}

app.listen(3000, function(){
    /* eslint-disable no-console */
    console.log('Listening on port 3000...');
    /* eslint-enable no-console */
});
