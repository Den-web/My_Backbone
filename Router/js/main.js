(function() {
	//Пространство имен
	window.App = {
		Models: {},
		Views: {},
		Collections: {},
		Router: {}
	};

	var vent = _.extend({}, Backbone.Events);

	
	App.Views.SpecialTasks = Backbone.View.extend({
		initialize: function(){
			vent.on('specialTasks:show', this.show, this);
		},
		show: function(id){
			var specialTask = this.collection.get('id');
			var specialTaskView = new App.Views.SpecialTask({ model: specialTask});
			$('body').append(specialTasksView.render().el);
		}
	})

	App.Router = Backbone.Router.extend({
		routes: {
			''     				: 'start',
			'specialTasks/:id'  : 'showSpecialTasks',
			'search/:query'		: 'search',
			'*other'			: 'default'
		},

		start: function(){
			console.log('Стартовая страница!');
		},

		showSpecialTasks: function(id){
			vent.trigger('specialTasks:show', id);
		},

		search: function(query){

		},

		default: function(other){
			alert('вы уверены что там где надо?' + other);
		}
	});

	new App.Views.SpecialTasks({collection: someCollection});

	new App.Router();
	Backbone.history.start();

})();