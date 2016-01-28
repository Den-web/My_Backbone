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