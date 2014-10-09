'use strict';

marketindicatorsmodule
.config(['$routeProvider', 
         '$locationProvider', 
         function ($routeProvider, 
                   $locationProvider) {
    $routeProvider
    
    .when('/marketindicators', {
        templateUrl: 'views/marketindicators.html',
        controller: 'MarketIndicatorsController'
    });

    $locationProvider.html5Mode(true);
}]);
