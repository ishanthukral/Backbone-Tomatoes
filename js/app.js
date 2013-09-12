var AppRouter = Backbone.Router.extend({

	routes: {
		'' : 'home',
		'films/:item' : 'filmDetails',
		'addFavourites/:item' : 'addFavourites',
		'favourites' : 'favourites'
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

		this.favourites = new FavouriteCollection();
		this.favourites.fetch();
		this.favouritesView = new FilmView({collection: this.favourites});
	},

	home: function(){
		$('#app').html(this.filmView.render().el);
	},

	filmDetails: function(item) {
		this.filmDetailView.model = this.films.get(item);
		$('#app').html(this.filmDetailView.render().el);
	},

	addFavourites: function(item) {
		var film = this.films.get(item);
		this.favourites.add(film);
		this.favourites.localStorage.create(film);
	},

	favourites: function() {
		$('#app').html(this.favouritesView.render().el);
	}

});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});