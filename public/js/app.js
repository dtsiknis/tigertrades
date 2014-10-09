// Declare all modules here and set global vars
var marketindicatorsmodule = angular.module('tigertrades.marketindicators', ['ngResource']);

// Declare app level module and dependencies
angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService', 'tigertrades.marketindicators']);
