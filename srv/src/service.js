// service.js

var express    = require('express');
var routes     = require('./routes/routes.js');
var body_parser = require('body-parser');

exports.createServer = function createServer() {
    // Initialize express
    var server = express();

    // Specify middleware
    server.use(body_parser());

    server.use(body_parser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    server.use(body_parser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

    //server.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

    var staticFilePath = __dirname + '/../../public';
    server.use(express.static(staticFilePath));

    // Attach route handlers
    routes.attachHandlers(server);

    return server;
};
