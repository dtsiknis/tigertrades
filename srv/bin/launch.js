// launch.js
//
// Handles starting the service
//

var server = require('../src/service.js').createServer();

server.listen(3000, function () {
    console.log('Accepting incoming requests: ' + server.settings.env);
});
