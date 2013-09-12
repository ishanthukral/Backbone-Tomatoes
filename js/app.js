var AppRouter = Backbone.Router.extend({

	routes: {
		'' : 'home',
		'films/:item' : 'filmDetails'
	},

	initialize: function() {
		// Initialize a Collection
		this.films = new FilmCollection();
		// Load the Rotten Tomato Data
		this.films.load();

		this.filmModel = new FilmModel();

		this.filmView = new FilmView({collection: this.films});

		this.filmDetailView = new FilmDetailView({
			model: this.filmModel
		});
	},

	home: function(){
		$('#app').html(this.filmView.render().el);
	},

	filmDetails: function(item) {
		this.filmDetailView.model = this.films.get(item);
		$('#app').html(this.filmDetailView.render().el);
	}

});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});