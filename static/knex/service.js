'use strict';
 
angular.module('myApp')

.factory('homeService',
    ['$http', 
    function ($http) {
      		var service = {};

      		service.getData = function(callback){
      			callback("Hello from getData service")


            
      			$http.get('http://54.254.133.3:5000')
               .success(function (response) {
                   // console.log(response)
                   callback(response);
               });
      		}

          

      		return service;

        }

        
    ]);
