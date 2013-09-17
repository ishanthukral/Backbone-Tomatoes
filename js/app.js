var AppRouter = Backbone.Router.extend({

	routes: {
		'' : 'home',
		'films/:item' : 'filmDetails',
		'addFavourites/:item' : 'addFavourites',
		'unFavourite/:item' : 'unFavourite',
		'favourites' : 'favourites'
	},

	initialize: function() {
		// Keep a track of the current view
		this.currentView;

		this.films = new FilmCollection();
		// Load data from Rotten Tomatoes
		this.films.load();

		this.filmModel = new FilmModel();

		this.filmView = new FilmView({collection: this.films});

		this.filmDetailView = new FilmDetailView({
			model: this.filmModel
		});

		this.favourites = new FavouriteCollection();
		this.favourites.fetch();
		this.favouritesView = new FilmView({collection: this.favourites});
		
		this.searchResults = Backbone.Collection.extend();
	},

	home: function() {
		$('#app').html(this.filmView.render().el);
		this.currentView = 'home'
	},

	filmDetails: function(item) {
		var movie = this.films.get(item);
		if (this.isFavourited(movie)) movie.set('isFavourite', true);

		this.filmDetailView.model = movie;
		$('#app').html(this.filmDetailView.render().el);
		this.currentView = 'details'
	},

	addFavourites: function(item) {
		var film = this.films.get(item);
		film.set('isFavourite', true);
		this.favourites.add(film);
		this.favourites.localStorage.create(film);
		// Option - change collection to favourites
	},

	unFavourite: function(item) {
		var film = this.films.get(item);
		this.favourites.remove(item);
		this.favourites.localStorage.destroy(film);

		film.set('isFavourite', false);

		$('#app').html(this.favouritesView.render().el);
	},

	favourites: function() {
		$('#app').html(this.favouritesView.render().el);
		this.currentView = 'favourites'
	},

	isFavourited: function(item) {
		var movieID = item.id;
		for (var i in this.favourites.models) {
			if (movieID == this.favourites.models[i].id) {
				return true;
			}
		}
		return false;
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});