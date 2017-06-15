'use strict';   // See note about 'use strict'; below

var myApp = angular.module('myApp', [
 'ngRoute','angularCharts'
]);

myApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
             when('/home', {
             		controller: 'homeController',
                templateUrl: '/static/knex/index.html',

             }).
             otherwise({
                redirectTo: '/home'
             });
    }]);