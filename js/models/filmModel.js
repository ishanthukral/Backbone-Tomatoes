/***********************
	Model for a film
************************/

var FilmModel = Backbone.Model.extend({
	defaults: {
		'title' : '',
		'poster' : '',
		'isFavourite' : false,
		'isFresh' : false
	},

	toggleFavourite: function() {
		var current = this.get('isFavourite');
		this.set('isFavourite', !current);
	},

	// Not currently used
	isFresh: function() {
		var score = this.attributes.ratings.critics_score;
		if (score > 60) {
			this.set('isFresh', true);
		}
	}

});