/*global define*/
'use strict';

define(['angular', 'angularRoute'], function (angular) {
	return angular.module('app', ['ngRoute'])
		.config(['$interpolateProvider', function($interpolateProvider) {
			$interpolateProvider.startSymbol('[[');
			$interpolateProvider.endSymbol(']]');
		}]);
});