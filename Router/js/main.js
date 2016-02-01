(function() {
	//Пространство имен
	window.App = {
		Models: {},
		Views: {},
		Collections: {},
		Router: {}
	};

	
	// шаблон
	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};

	App.Router = Backbone.Router.extend({
		routes: {
			''     				: 'index',
			'page/:id/*simbo'   : 'page',
			'search/:query'		: 'search',
			'*other'			: 'default'
		},

		index : function(){
			console.log('Dctv привет от индексного роута!');
		},

		page: function(id, simbo){
			console.log('Это роут Page' + simbo + ' !');
		},

		search: function(query){

		},

		default: function(other){
			alert('вы уверены что там где надо?' + other);
		}
	});

	new App.Router();
	Backbone.history.start();

})();