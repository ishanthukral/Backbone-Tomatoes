var FilmDetailView = Backbone.View.extend({

	template: Handlebars.compile(
		'<script>$(this).scrollTop(0);</script>'+
		'<div class="row film-detail">'+
			'<div class="film-detail-title">'+
				'<h1>{{title}}</h1>'+
			'</div>'+
			'<div class="col-md-12 film-detail-poster" style="background-image:url({{posters.original}})">'+
			'<br><br><br><br><br><br><br><br><br><br><br><br>'+
			'<br><br><br><br><br><br><br><br><br><br><br><br>'+
			'</div>'+
			'<div class="col-md-12 film-detail-score">'+
				'<table align="center" class="table table-bordered table-responsive"><tr>'+
					'<td><img class="" src="./images/critic.png" height="60px" width="50px"></td>'+
					'<td><p class="">{{ratings.critics_score}}</p></td>'+
					'<td><img class="" src="./images/audience.png" height="60px" width="50px"></td>'+
					'<td><p class="">{{ratings.audience_score}}</p></td>'+
				'</tr></table>'+
			'</div>'+
			'{{#if isFavourite}}'+
				'<div class="film-detail-unfavourite-button">'+
					'<a type="button" id="unfavourite-button" data-container="body" data-toggle="popover" data-placement="top" data-content="Removed from Favourites!" href="#/unFavourite/{{id}}" class="fav-button btn btn-danger" data-original-title="" title="">Remove from Favourites</a>'+
				'</div>'+
			'{{else}}'+
				'<div class="film-detail-favourite-button">'+
					'<a type="button" id="favourite-button" data-container="body" data-toggle="popover" data-placement="top" data-content="Favourited!" href="#/addFavourites/{{id}}" class="fav-button btn btn-success" data-original-title="" title="">Favourite</a>'+
			'</div>'+
			'{{/if}}'+
			'<div class="film-detail-synopsis">'+
				'<h2>Synopsis</h2>'+
				'<p>{{synopsis}}</p>'+
			'</div>'+
			'<div class="film-detail-cast">'+
				'<table class="table table-condensed table-responsive"><tr>'+
					'<h2>Cast</h2>'+
					'{{#each abridged_cast}}'+
						'<td><p>{{name}}</p></td>'+
					'{{/each}}'+
				'</tr></table>'+
			'</div>'+
			'<script>'+
				'$("#favourite-button").click(function(){'+
					'$("#favourite-button").popover("show");'+
					'setTimeout(function() {'+
						'$("#favourite-button").popover("hide");'+
					'}, 750);'+
				'});'+
			'</script>'+
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