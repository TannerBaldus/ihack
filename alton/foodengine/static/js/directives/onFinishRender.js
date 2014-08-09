define(['app'], function (app) {
	'use strict';

	/* Controllers */

	app.directive('onFinishRender', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope, element, attr) {
				if (scope.$last) {
					$timeout(function () {
						scope.$emit('ngRepeatFinished');
					});
				}
			}
		};
	}]);
});