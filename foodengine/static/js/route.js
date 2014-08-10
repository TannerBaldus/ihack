define(['angular',
		'app',
		'controllers/InputController',
		'controllers/DisplayController',
		'controllers/ConfirmController'
		], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home.html',
			controller: 'InputController',
		}).when('/result', {
			templateUrl: 'result.html',
			controller: 'DisplayController'
		}).when('/confirm', {
			templateUrl: 'confirm.html',
			controller: 'ConfirmController'
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