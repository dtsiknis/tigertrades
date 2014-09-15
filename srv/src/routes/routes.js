// routes.js

exports.attachHandlers = function attachHandlers(server) {

    // Require all endpoint route index files here
    require('./marketindicators')(server);
};
