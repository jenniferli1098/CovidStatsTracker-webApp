
// modules =================================================
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// set our port
const port = process.env.PORT || 3000;

// configuration ===========================================
// configure body parser
app.use(bodyParser.json()); // parse application/json

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request.
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));



//defining route
/*
app.get('/tproute', function (req, res) {
   res.send('This is routing for the application developed using Node and Express...');
});
const routes = require('public/js/routes');
app.use('/',routes);
*/

// startup our app at http://localhost:3000
app.listen(port, function () {
    console.log('listening: http://localhost:' + port + '/');
  });
