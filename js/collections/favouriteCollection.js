var FavouriteCollection = Backbone.Collection.extend({

	model: FilmModel,
	url: '/favourites',

	localStorage: new Backbone.LocalStorage("FavouriteCollection")
});