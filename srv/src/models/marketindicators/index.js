// 
// models/marketindicators/index.js
//
// Data access for market indicators
//

//------------------------------------------------------------------------------

var MarketIndicator = module.exports = function (db) {
    // Access to market indicators model through "ORM"
    this.market_indicators = db.collection('marketindicators');
};

//------------------------------------------------------------------------------

MarketIndicator.prototype.find = function (query, callback) {
    this.market_indicators.find(query, function (err, results) {
        return callback(err, results);
    });
};

//------------------------------------------------------------------------------

MarketIndicator.prototype.findById = function (query, callback) {
    this.market_indicators.findById(query, function (err, results) {
        return callback(err, results);
    });
};

//------------------------------------------------------------------------------

MarketIndicator.prototype.insert = function (query, callback) {
    this.market_indicators.insert(query, function (err, result) {
        return callback(err, result);
    });
};

//------------------------------------------------------------------------------

MarketIndicator.prototype.updateById = function (query, 
                                                 action, 
                                                 options, 
                                                 callback) {
    this.market_indicators.updateById(query, 
                                      action, 
                                      options, 
                                      function (err, result) {
        return callback(err, result);
    });
};

//------------------------------------------------------------------------------

MarketIndicator.prototype.removeById = function (query, callback) {
    this.market_indicators.removeById(query, function (err, result) {
        return callback(err, result);
    });
};

//------------------------------------------------------------------------------

