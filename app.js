var express = require('express');
var path = require ('path');
var bodyParser = require('body-parser');
var app = module.exports = express();
var router = express.Router();

var server_config = require('./config/server.json');
var routes = require('./routes');

// Register ejs as .html.
app.engine('.html', require('ejs').__express);
//app.use(logger());
app.set('views', path.join(__dirname +'/views'));
app.set('view engine', 'html');


app.use(bodyParser.json());
//development
if (process.argv[2] === '--dev'){
    console.log('Set to develop module')
    app.use(express.static(__dirname + '/src'));
}
//production
else{
    var expireTime = 2592000000;
    app.use(express.static(__dirname + '/public', { maxAge: expireTime }));
}

routes(app);

var port = server_config['port']||4000;

if (!module.parent) {
    app.listen(port);
    console.log('Express started on port '+port);
}
