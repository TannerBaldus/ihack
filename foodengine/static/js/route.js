define(['angular',
		'app',
		'controllers/InputController',
		'controllers/DisplayContoller'
		], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'input.html',
			controller: 'InputController',
		});

		$routeProvider.when('/result', {
			templateUrl: 'result.html',
			controller: 'DisplayContoller'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	}]).run(function($rootScope) {
		$rootScope.$on('$routeChangeError', function (e, curr, prev) {
            console.log('error');
        });
	});

});