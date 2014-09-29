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

	getPoster: function() {
		var posterUrl = this.attributes.posters.detailed;
		return posterUrl.replace('tmp.jpg', 'ori.jpg');
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