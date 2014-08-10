define(['app', 'services/SpinnerService', 'services/RecipeService', 'services/InputService'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('ConfirmController', ['$scope', '$timeout', 'SpinnerService', 'RecipeService', 'InputService',
		function ($scope, $timeout, SpinnerService, RecipeService, InputService) {
			$scope.status = 'We are processing your orders now';
			$scope.spinner = SpinnerService.init($('.spinner')[0]);
			$timeout(function(){
				$scope.status = 'Order Success';
				$scope.spinner.stop();
			}, SpinnerService.SIM_TIME);
	}]);
});