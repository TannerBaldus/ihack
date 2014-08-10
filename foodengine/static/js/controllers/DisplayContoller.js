define(['app'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('DisplayContoller', ['$scope', '$timeout', function ($scope, $timeout) {
			$scope.hello = 'no';
			$timeout(function(){
				$scope.$apply();
			});
		}]);
});