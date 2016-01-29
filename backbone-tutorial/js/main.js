//Хелпер шаблона
var template = function(id) {
	return _.template( $('#' + id).html() );
};

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
		
		this.collection.each(function(person) {
			var personView = new PersonView({model: person});

			this.$el.append(personView.render().el);
		}, this);

		return this;
		
	}
});

//Вид  одного человека
var PersonView = Backbone.View.extend({
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


var peopleCollection = new PeopleCollection([
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
	},
]);




var peopleView = new PeopleView({collection: PeopleCollection});

$(document.body).append(peopleView.render().el)