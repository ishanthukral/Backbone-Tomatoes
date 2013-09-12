var FilmView = Backbone.View.extend({
	
	template: Handlebars.compile(

		'<div class="row film-display">'+
		'{{#each models}}'+
		'<a href="#/films/{{attributes.id}}">'+
		'<img class="film-poster img-responsive col-xs-6 col-sm-4 col-md-3 col-lg-2" src="{{attributes.posters.profile}}">'+
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
	}
});