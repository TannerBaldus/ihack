define(['app'], function (app) {
	'use strict';

	/* Controllers */

	app.service('UserService', function($rootScope) {
		var isConnected = false;

		this.getLoginState = function(){
			return isConnected;
		};
	});
});