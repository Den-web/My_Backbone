$(function() {
	//Пространство имен
	window.App = {
		Models: {},
		Views: {},
		Collections: {}
	};

	
	// шаблон
	var template = function(id) {
		return _.template( $('#' + id).html() );
	};

	App.Models.Task = Backbone.Model.extend({});
	App.View.Task = Backbone.View.extend({
		tagName: 'li',
		render: function () {
			this.$el.html( this.model.get('title') );
			return this;
		}
	});

	var task = new App.Models.Task({
		title: 'Сходить в магазин',
		priority: 4

	});
	var taskView = new App.View.Task({ model: task });

	console.log(taskView.render().el);

});