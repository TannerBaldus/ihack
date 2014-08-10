define(['angular',
		'app',
		'controllers/InputController',
		'controllers/DisplayContoller'
		], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home.html',
			controller: 'InputController',
		});

		$routeProvider.when('/result', {
			templateUrl: 'result.html',
			controller: 'DisplayContoller'
		});

		$routeProvider.otherwise({redirectTo: '/home'});

	}]).run(function($rootScope, $location) {
		$rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
			if ($location.path() === '/home') {
				// apply body background
				$('body').addClass('background');
            }else{
            	$('body').removeClass('background');
            }
        });
	});

});