var FilmModel = Backbone.Model.extend({
	defaults: {
		'title' : '',
		'poster' : '',
		'isFavourite' : false
	},

	toggleFavourite: function() {
		var current = this.get('isFavourite');
		this.set('isFavourite', !current);
	}

});