var FavouriteCollection = Backbone.Collection.extend({

	model: FilmModel,
	url: '/favourites',

	localStorage: new Backbone.LocalStorage("FavouriteCollection"),

	search: function(query) {
		if (query == "") return this;

		var pattern = new RegExp(query, "gi");
		return _(this.filter(function(data) {
			return pattern.test(data.get("title"));
		}));
	}
});