// marketindicators/index.js
//
// Routes for marketindicators collection
//

// This will initialize the DB and import all model prototypes
var Models = require('../../models');

//------------------------------------------------------------------------------

module.exports = function attachHandlers(router) {

    // Get index
    router.get('/api/marketindicators', listMarketIndicators);

    // Get detail
    router.get('/api/marketindicators/:id', viewMarketIndicator);

    // Post new 
    router.post('/api/marketindicators', createMarketIndicator);

    // Update
    router.put('/api/marketindicators/:id', updateMarketIndicator);

    // Delete
    router.del('/api/marketindicators/:id', removeMarketIndicator);
};

//------------------------------------------------------------------------------

function listMarketIndicators(req, res, next) {
    // Fetch by id
    Models.MarketIndicator.find({}, function(e, result) {
        if (e) {
            return next(e);
        }

        res.send(result);
    });
};

//------------------------------------------------------------------------------

function viewMarketIndicator(req, res, next) {
    // Fetch by id
    Models.MarketIndicator.findById(req.params.id, function(e, result) {
        if (e) {
            return next(e);
        }

        res.send(result);
    });
};

//------------------------------------------------------------------------------

function createMarketIndicator(req, res, next) {

    // Insert new record pased on request body 
    Models.MarketIndicator.insert(req.body, function(e, results) {
        if (e) {
            return next(e);
        }

        res.send(results);
    });
};

//------------------------------------------------------------------------------

function updateMarketIndicator(req, res, next) {

    // Update an existing record by id using request body
    Models.MarketIndicator.updateById(req.params.id, 
                                      { $set:req.body }, 
                                      { safe: true, multi: false }, 
                                      function (e, result) {
        if (e) {
            return next(e);
        }

        res.send((result === 1) ? { msg: 'success' } : { msg: 'error' });
    });
};

//------------------------------------------------------------------------------

function removeMarketIndicator(req, res, next) {

    // Remove a market indicator by id
    Models.MarketIndicator.removeById(req.params.id, function (e, results) {
        if (e) {
            return next(e);
        }

        res.send((results === 1) ? { msg: 'success' } : { msg: 'error' });
    });
};

//------------------------------------------------------------------------------
