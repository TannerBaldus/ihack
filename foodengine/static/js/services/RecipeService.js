define(['app', 'modernizr'], function (app) {
	'use strict';

	/* Controllers */

	app.service('RecipeService', function() {
		var recipes = [];
		
		this.get = function() {
			if (recipes.length === 0 && Modernizr.localstorage && localStorage.getItem('recipes')) {
				try{
					recipes = JSON.parse(localStorage.getItem('recipes'));
				}catch(e){
					return [];
				}
			}
			return recipes;
		};
		this.set = function(data) {
			recipes = [];
			for (var i=0; i<data.length; i++){
				var fields = data[i].fields;
				fields.image_url = fields.image_url.replace('/thumb', '');
				recipes.push(fields);
			}
			if (Modernizr.localstorage) {
				// stringify data and store it
				localStorage.setItem('recipes', JSON.stringify(recipes));
			}
		};
	
	});


});