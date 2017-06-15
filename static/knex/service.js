'use strict';
 
angular.module('myApp')

.factory('homeService',
    ['$http', 
    function ($http) {
      		var service = {};

      		service.getData = function(callback){
      			callback("Hello from getData service")


            
      			$http.get('http://127.0.0.1:5000/')
               .success(function (response) {
                   // console.log(response)
                   callback(response);
               });
      		}

          

      		return service;

        }

        
    ]);