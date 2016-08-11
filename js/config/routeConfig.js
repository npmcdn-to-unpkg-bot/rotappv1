app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {templateUrl:'view/destinos.html'})
	.when('/novo', {templateUrl:'view/addDestino.html', controller:'addDestinoCtrl'})
	.when('/destino/:idDestino', {templateUrl:'view/destino.html', controller:'destinoCtrl'})
	.otherwise({templateUrl:'view/destinos.html'});
});
 