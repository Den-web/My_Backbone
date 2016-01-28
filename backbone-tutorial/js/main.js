//Модель человека
var Person = Backbone.Model.extend({
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

var person = new Person();

//Список людей
var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

//Вид списка людей
var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function(){
		
	},

	render: function(){
		//1 Пройтись по всему списку и срендерить каждый PersonView
		this.collection.each(function(person){
			var personView = new PersonView({model: person});

			this.$el.append(personView.render().el);
		}, this);

		return this;
		//2 Вставить главный тег ul (this.$el)
	}
});

//Вид  одного человека
var PersonView = Backbone.View.extend({
	tagName:'li',
	
	//1способ подключения шаблона удаленно   template: _.template( $('#person-id').html() ),

	template: '#person-id',

	initialize: function(){
		this.render();
	},

	render: function(){
		//ЗАМЕЧАТЕЛЬНЫЙ ШАБЛОН 
		var template = _.template( $(this.template).html() );
		this.$el.html( template(this.model.toJSON() ) );

	}
});

var peopleView = new PeopleView({collection: PeopleCollection});

$(document.body).append(peopleView.render().el)