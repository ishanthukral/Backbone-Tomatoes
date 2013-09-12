var FilmDetailView = Backbone.View.extend({
	
	template: Handlebars.compile(
		'<div class="row film-detail">'+
			'<div class="film-detail-title">'+
				'<h1>{{title}}</h1>'+
			'</div>'+
			'<div class="col-md-12 film-detail-poster" style="background-image:url({{posters.original}})">'+
			'</div>'+
			'<div class="film-detail-synopsis">'+
				'<h2>Synopsis</h2>'+
				'<p>{{synopsis}}</p>'+
			'</div>'+
			'<div class="film-detail-cast">'+
				'<table class="table"><tr>'+
					'<h2>Cast</h2>'+
					'{{#each abridged_cast}}'+
						'<td><p>{{name}}</p></td>'+
					'{{/each}}'+
				'</tr></table>'+
			'</div>'+
		'</div>'
	),

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});