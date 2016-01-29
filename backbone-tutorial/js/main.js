
(function() {
	window.App = {
		Models: {},
		Views: {},
		Collections: {}
	};






	//Хелпер шаблона
	var template = function(id) {
		return _.template( $('#' + id).html() );
	};
	


	//Модель человека
	App.Models.Person = Backbone.Model.extend({
		defaults: {
			name: 'Denis',
			age: 25,
			job: 'web developer'
		},

		validate: function( attrs ){
			console.log(attrs);

			if (attrs.age <= 0){
				return 'Возраст должен быть положительный!'; 
			}

			if(! attrs.name){
				return ' Введите Имя!';
			}
		},

		walk: function(){
			return this.get('name') + ' is walking!';
		}
	});

	var person = new App.Models.Person();

	//Список людей
	App.Collections.People = Backbone.Collection.extend({
		model: App.Models.Person
	});

	//Вид списка людей
	App.Views.People = Backbone.View.extend({
		tagName: 'ul',

		initialize: function(){
			
		},

		render: function(){
			
			this.collection.each(function(person) {
				var personView = new App.Views.Person({model: person});

				this.$el.append(personView.render().el);
			}, this);

			return this;
			
		}
	});

	//Вид  одного человека
	App.Views.Person = Backbone.View.extend({
		tagName:'li',
		
		//1способ подключения шаблона удаленно   template: _.template( $('#person-id').html() ),

		template:  template('person-id'),

		initialize: function(){
			this.render();
		},

		render: function(){
			//ЗАМЕЧАТЕЛЬНЫЙ ШАБЛОН 
			this.$el.html( this.template( this.model.toJSON() ) );

			return this;
		}
	});


	var peopleCollection = new App.Collections.People([
		{
			name: 'Петр',
			age: 20,
			job: 'Таксист'  
		},
		{
			name: 'Вася',
			age: 28,
			job: 'Пожаррюга'  
		},
		{
			name: 'Вова',
			age: 29,
			job: 'Лось'  
		}
	]);




	var peopleView = new App.Views.People({collection: peopleCollection});

	$(document.body).append(peopleView.render().el);

	console.log(App.Models);

}());