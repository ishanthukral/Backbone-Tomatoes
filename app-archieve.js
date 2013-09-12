var AppRouter = Backbone.Router.extend({

	routes: {
		'' : 'home',
		'films/:item' : 'movieDetails'
	},

	initialize: function() {

		this.filmModel = new FilmModel();

		$.ajax({
			url: 'http://api.rottentomatoes.com/api/public/'+
			'v1.0/lists/movies/in_theaters.json?'+
				'page_limit=50&page=1&country=us&'+
					'apikey=3pug8qv5purwfsbkqfpgb4dc',
			dataType: "jsonp",
			success: function(data) {
				this.films = new FilmCollection(data.movies);
				this.filmView = new FilmView({collection : this.films});

				$('#app').html(this.filmView.render().el);
			},

			this.filmDetailView = new FilmDetailView ({
				model : this.filmModel
			});
		});
	},

	movieDetails: function(item) {
		this.filmDetailView = this.films.get(item);
		$('#app').html(this.filmDetailView.render().el);
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});