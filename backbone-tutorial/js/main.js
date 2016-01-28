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

var PersonView = Backbone.View.extend({
	tagName:'li',
	
	template: _.template('<%= name %> ( <%= age %> ) - <%= job %> '),

	initialize: function(){
		this.render();
	},

	render: function(){
		//this.$el.html(this.model.get('name') + '(' + this.model.get('age') + ') -' +this.model.get('job'));
		this.$el.html(this.template(this.model.toJSON() ) );

	}
});

var person = new Person;
var personView = new PersonView({model: person});