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
			''     : 'index',
			'read' : 'read'
		},

		index : function(){
			console.log('Dctv привет от индексного роута!');
		},

		read : function(){
			console.log('Это роут Read ');
		}
	});

	new App.Router();
	Backbone.history.start();

})();