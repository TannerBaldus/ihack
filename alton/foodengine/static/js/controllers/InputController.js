define(['app'], function (app) {
	'use strict';

	/* Controllers */

	return app.controller('InputController', ['$scope', '$timeout', function ($scope, $timeout) {
		$scope.submitted = false;

		function initSpinner(){
			var opts = {
			  lines: 17, // The number of lines to draw
			  length: 32, // The length of each line
			  width: 11, // The line thickness
			  radius: 60, // The radius of the inner circle
			  corners: 1, // Corner roundness (0..1)
			  rotate: 0, // The rotation offset
			  direction: 1, // 1: clockwise, -1: counterclockwise
			  color: '#fff', // #rgb or #rrggbb or array of colors
			  speed: 1, // Rounds per second
			  trail: 58, // Afterglow percentage
			  shadow: true, // Whether to render a shadow
			  hwaccel: false, // Whether to use hardware acceleration
			  className: 'spinner', // The CSS class to assign to the spinner
			  zIndex: 2e9, // The z-index (defaults to 2000000000)
			  top: 'auto', // Top position relative to parent in px
			  left: 'auto' // Left position relative to parent in px
			};
			var target = $('#svg-container')[0];
			return new Spinner(opts).spin(target);
		}
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
						var spinner = initSpinner();
					}
				})
				.done(function (data){

				});
			}
		};
	}]);
});