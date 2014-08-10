/*global define*/
'use strict';

define(['angular', 'angularRoute', 'angularStorage'], function (angular) {
	return angular.module('app', ['ngRoute', 'ngStorage'])
		.config(['$interpolateProvider', function($interpolateProvider) {
			$interpolateProvider.startSymbol('[[');
			$interpolateProvider.endSymbol(']]');
		}]);
});