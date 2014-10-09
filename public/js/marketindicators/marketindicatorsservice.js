//angular.module('tigertrades.marketindicators').
marketindicatorsmodule.
factory('marketindicatorsservice', ['$resource', '$q', '$route',
    function ($resource, $q, $route) {

        /**
         * Resources for use in services calls.
         */

        var marketIndicatorsResource = 
            $resource('/api/marketindicators', {}, { get: {  method: 'GET', 
                                                            isArray: true } });

    return {

        /**
         * Public service methods.
         */

        getMarketIndicators: function () {

            var deferred = $q.defer();

            // Resolve promise with response data on success
            var success = function (res) {
                deferred.resolve(res);
            };

            // Failure callback rejects promise
            var failure = function (error) {
                deferred.reject(error);

                // TODO: Log something here
                //console.log("Error getting market indicators");
            };

            // Get market indicators request
            marketIndicatorsResource.get({}, success, failure);

            return deferred.promise;
        }
    };

}]);

