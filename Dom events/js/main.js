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

	App.Models.Task = Backbone.Model.extend({
		validate: function(attr){
			if( ! $.trim(attrs.title ) ){
			return 'Bvz задачи олжно быть валидным!';

			}
		}
	});
	App.Views.Task = Backbone.View.extend({
		initialize: function(){
			this.model.on('change', this.render, this);
		},
		tagName: 'li',
		template: template('taskTemplate'),
		render: function () {
			var template = this.template(this.model.toJSON());
			this.$el.html( template );
			return this;
		},
		events:{
			'click .edit': 'editTask'
		},
		editTask: function(){
			var newTaskTitle = prompt('Как переименуем задачу?', this.model.get('title'));
			if(!newTaskTitle) return;
			this.model.set('title', newTaskTitle);

		}
	});

	App.Collections.Task = Backbone.Collection.extend({
		model: App.Models.Task
	});

	App.Views.Tasks = Backbone.View.extend({
		tagName: 'ul',
		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		},
		addOne: function(task) {
			//создавать новый дочерний вид
			var taskView = new App.Views.Task({ model: task });
			//добавить его в дочерний елемент
			this.$el.append(taskView.render().el);
		}
	})
	/*var task = new App.Models.Task({
		title: 'Сходить в магазин',
		priority: 4

	});*/

	window.tasksCollection = new App.Collections.Task([
	{
		title: 'Сходить в магазин',
		priority: 4
	},
	{
		title: 'Получить почту',
		priority: 3
	},
	{
		title: 'Сходить на работу',
		priority: 5
	},
	]);

	var tasksView = new App.Views.Tasks({ collection: tasksCollection});

	
	$('.tasks').html(tasksView.render().el);



});