'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  
  .value('version', '0.1')
  
  .factory('Auth',['$timeout', function($timeout){
  	return {
  		isLoggedIn: function(callback){

  			//timeout is only for demonstration purposes (simulates an api call)
  			$timeout(function(){
  				callback(false);
  			}, 2000);
  		}
  	}
  }]);
