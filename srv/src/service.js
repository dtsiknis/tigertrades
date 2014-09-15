// service.js

var express    = require('express');
var routes     = require('./routes/routes.js');
var body_parser = require('body-parser');

exports.createServer = function createServer() {
    // Initialize express
    var server = express();

    // Specify middleware
    server.use(body_parser());

    // Attach route handlers
    routes.attachHandlers(server);

    return server;
};
