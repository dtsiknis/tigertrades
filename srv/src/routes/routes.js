// routes.js

exports.attachHandlers = function attachHandlers(server) {

    // Require all endpoint route index files here
    require('./marketindicators')(server);

    // Finish with any top level or default handlers
    attachTopLevelHandlers(server);
};

//------------------------------------------------------------------------------

function attachTopLevelHandlers(router) {

    router.get('*', function(req, res) {
		res.sendfile('./public/index.html');
    });

};
