define(['app', 'services/SpinnerService', 'services/RecipeService', 'services/InputService'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('DisplayContoller', ['$scope', '$timeout', 'SpinnerService', 'RecipeService', 'InputService',
		function ($scope, $timeout, SpinnerService, RecipeService, InputService) {
			$scope.recipes = RecipeService.get();
			$scope.spinner = null;

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
						if($scope.spinner) $scope.spinner.stop();
						$timeout(function(){
							$scope.recipes = RecipeService.get();
							$scope.$apply();
						});
					});

				}, 5000);
			};

			$scope.purchase = function() {

			};
	}]);
});