//angular.module('tigertrades.marketindicators')
marketindicatorsmodule
.controller('MarketIndicatorsController', 
    ['$scope',
     '$route',
     'marketindicatorsservice',
     function ($scope, $route, marketindicatorsservice) {

	     $scope.tagline = 'Make Money Money';

         marketindicatorsservice.getMarketIndicators().then(function (indicators) {
             $scope.marketIndicators = indicators;
         });
}]);
