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


//Список людей
var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

//Вид списка людей
var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function(){
		console.log(this.collection);
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