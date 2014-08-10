define(['app', 'services/SpinnerService'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('InputController', ['$scope', '$timeout', 'SpinnerService', function ($scope, $timeout, SpinnerService) {
		$scope.submitted = false;
		$scope.spinner = null;

		$scope.submit = function(form){
			$scope.submitted = true;
			if(form.$valid){
				console.log($scope.num, $scope.budge, $scope.meals);
				var url = document.location.origin;
				var endpoint = '/api/search/';
				var path = url + endpoint;
				$.ajax({
					type:'GET',
					url: path,
					dataType: "json",
					beforeSend: function( xhr ){
						// start spinner
						$scope.spinner = SpinnerService.init($('.spinner')[0]);
					}
				})
				.done(function (data){
					if($scope.spinner) spinner.stop();
				});
			}
		};
	}]);
});