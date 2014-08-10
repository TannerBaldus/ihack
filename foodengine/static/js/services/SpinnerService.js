define(['app'], function (app) {
	'use strict';

	/* Controllers */

	app.service('SpinnerService', function() {
		this.init = function(target){
			var opts = {
			  lines: 17, // The number of lines to draw
			  length: 12, // The length of each line
			  width: 5, // The line thickness
			  radius: 30, // The radius of the inner circle
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
			
			return new Spinner(opts).spin(target);
		};
	});


});