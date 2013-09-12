var FilmCollection = Backbone.Collection.extend({

	model: FilmModel,

	load: function() {
		var self = this;
		$.ajax({
			url: 'http://api.rottentomatoes.com/api/public/'+
			'v1.0/lists/movies/in_theaters.json?'+
				'page_limit=50&page=1&country=us&'+
					'apikey=3pug8qv5purwfsbkqfpgb4dc',
			dataType: "jsonp",
			success: function(data) {
				self.reset(data.movies);
			}
		});
	}

});