define(['app', 'services/SpinnerService', 'services/RecipeService', 'services/InputService'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('InputController', ['$scope', 'SpinnerService', 'RecipeService', 'InputService',
		function ($scope, SpinnerService, RecipeService, InputService) {
		$scope.submitted = false;
		$scope.spinner = null;

		$scope.submit = function(form){
			$scope.submitted = true;
			if(form.$valid){
				$.ajax({
					type:'POST',
					url: document.location.origin + '/search',
					data: {
						num: $scope.num,
						budget: $scope.budget,
						meals: $scope.meals
					},
					dataType: "json",
					beforeSend: function(){
						// start spinner
						$scope.spinner = SpinnerService.init($('.spinner')[0]);
					}
				})
				.done(function (data){
					RecipeService.set(data);
					InputService.set({num: $scope.num, budget: $scope.budget, meals: $scope.meals});
					if($scope.spinner) $scope.spinner.stop();
					window.location.href = '#/result';
				});
			}
		};
	}]);
});