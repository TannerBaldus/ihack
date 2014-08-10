define(['app', 'services/SpinnerService', 'services/RecipeService', 'services/InputService'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('DisplayController', ['$scope', '$timeout', 'SpinnerService', 'RecipeService', 'InputService',
		function ($scope, $timeout, SpinnerService, RecipeService, InputService) {
			$scope.recipes = RecipeService.get();
			$scope.spinner = null;
			$scope.nospin = true;

			$scope.$on('spin.start', function(){
				// hide buttons
				$timeout(function(){
					$scope.nospin = false;
				});
			});

			$scope.$on('spin.end', function(){
				// hide buttons
				$timeout(function(){
					$scope.nospin = true;
				});
			});

			$scope.research = function() {
				$scope.recipes = [];
				$scope.spinner = SpinnerService.init($('.spinner')[0]);
				$timeout(function(){
					$.ajax({
						type:'POST',
						url: document.location.origin + '/dummy',
						data: InputService.get(),
						dataType: "json"
					})
					.done(function (data){
						RecipeService.set(data);
						if($scope.spinner) SpinnerService.stop($scope.spinner);
						$timeout(function(){
							$scope.recipes = RecipeService.get();
							$scope.$apply();
						});
					});

				}, SpinnerService.SIM_TIME);
			};

			$scope.purchase = function() {
				window.location.href = '#/confirm';
			};
	}]);
});