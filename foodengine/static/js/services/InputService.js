define(['app', 'modernizr'], function (app) {
	'use strict';

	/* Controllers */

	app.service('InputService', function() {
		var inputs = {num: 0, budge: 0, meals: 0};
		
		this.get = function() {
			for (var key in inputs) {
				if (inputs[key] === 0 && Modernizr.localstorage) {
					try{
						inputs[key] = parseInt(localStorage.getItem(key), 10);
					}catch(e){
						//TO-DO handle errors
						return [0,0,0];
					}
				}
			}
			return inputs;
		};

		this.set = function(data) {
			inputs = data;
			if (Modernizr.localstorage) {
				for (var key in inputs) {
					localStorage.setItem(key, inputs[key]);
				}
			}
		};
	
	});
});