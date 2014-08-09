define(['app'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('InputController', ['$scope', '$timeout', function ($scope, $timeout) {
		$scope.hello = 'world';
	}]);
});