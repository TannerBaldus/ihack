define(['app', 'services/SpinnerService', 'services/RecipeService', 'services/InputService'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('ConfirmController', ['$scope', '$timeout', 'SpinnerService', 'RecipeService', 'InputService',
		function ($scope, $timeout, SpinnerService, RecipeService, InputService) {
			var stores = ['AmazonFresh', 'Instacart'];
			$scope.status = 'We are processing your orders now on ' + stores[Math.floor(Math.random() * 2)];

			$scope.spinner = SpinnerService.init($('.spinner')[0]);
			$scope.done = false;
			$timeout(function(){
				$scope.status = 'Order Succeeded';
				SpinnerService.stop($scope.spinner);
				$scope.done = true;
			}, SpinnerService.SIM_TIME);

			$scope.back = function(){
				window.location.href = '#/home';
			};
	}]);
});