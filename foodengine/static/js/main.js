/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../lib/angular/angular',
		angularRoute: '../lib/angular/angular-route',
		angularStorage: '../lib/angular/angular-storage',
		foundation: '../lib/foundation/foundation.min',
		jquery: '../lib/jquery/jquery-1.11.1.min',
		modernizr: '../lib/vendor/modernizr'
	},
	shim: {
		'foundation': ['jquery'],
		'angular': {
			exports: 'angular'
		},
		'angularRoute': ['angular'],
		'angularStorage': ['angular']
	}
});

require(['angular', 'app', 'route'], function (angular, app, route) {
	angular.bootstrap(document, [app['name']]);
});

require(['foundation'], function(){
	$(document).foundation();
});