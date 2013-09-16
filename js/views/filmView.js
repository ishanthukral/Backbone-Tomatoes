var FilmView = Backbone.View.extend({

	events: {
	},
	
	template: Handlebars.compile(
		'<div class="row film-display">'+
			'<script>$(this).scrollTop(0);</script>'+
			'{{#each models}}'+
			'<a href="#/films/{{attributes.id}}">'+
				'<img class="film-poster img-responsive col-xs-6 col-sm-3 col-md-3 col-lg-2" src="{{attributes.posters.profile}}">'+
			'</a>'+
			'{{/each}}'+
		'</div>'
	),

	initialize: function() {
		this.listenTo(this.collection, "reset", this.render);
	},

	render: function() {
		this.$el.html(this.template(this.collection));
		return this;
	},

	renderSearchResults: function(collection) {
		this.$el.html(this.template(collection));
		return this;
	},

	search: function(query) {
		var searchResults = this.collection.search(query);
		if (searchResults instanceof Backbone.Collection) {
			this.renderSearchResults(searchResults);	
		} else {
			var searchResultsCollection = new Backbone.Collection(searchResults._wrapped);
			this.renderSearchResults(searchResultsCollection);
		}
	}
});