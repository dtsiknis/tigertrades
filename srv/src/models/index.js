// models/index.js
//

// Init the ORM
var mongoskin = require('mongoskin');

// Build the database name
// NOTE: This is a termporary hack until I figure out configuration
if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = '';
}

var dbName = 'tigertrades' + process.env.NODE_ENV;

// Init db connection
var db = mongoskin.db('mongodb://@localhost:27017/' + dbName, { safe: true});

// Init each model with the db connection
var MarketIndicator = require('./marketindicators');

// Export all initialized ORM classes
module.exports.MarketIndicator = new MarketIndicator(db);

