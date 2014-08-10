/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../lib/angular/angular',
		angularRoute: '../lib/angular/angular-route',
		foundation: '../lib/foundation/foundation.min',
		jquery: '../lib/jquery/jquery-1.11.1.min'
	},
	shim: {
		'foundation': ['jquery'],
		'angular': {
			exports: 'angular'
		},
		'angularRoute': ['angular']
	}
});

require(['angular', 'app', 'route'], function (angular, app, route) {
	angular.bootstrap(document, [app['name']]);
});

require(['foundation'], function(){
	$(document).foundation();
});