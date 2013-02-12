'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {

  	var authResolver = {
		auth: function ($q, $route, Auth) {
	        var deferred = $q.defer();

	        Auth.isLoggedIn(function(result){
	        	if(result){
	        		deferred.resolve();
	        	} else {
	        		deferred.reject();
	        	}
	        });

	        return deferred.promise;
	    }
	};

  	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: MyCtrl1});
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1, resolve:authResolver});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])

  .run(function($rootScope, $location){

  	$rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        $location.path('/login');
    });

  });
