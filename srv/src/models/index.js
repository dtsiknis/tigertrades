// models/index.js
//

// Init the ORM
var mongoskin = require('mongoskin');

// Init db connection
var db = mongoskin.db('mongodb://@localhost:27017/tigertrades', { safe: true});

// Init each model with the db connection
var MarketIndicator = require('./marketindicators');

// Export all initialized ORM classes
module.exports.MarketIndicator = new MarketIndicator(db);

