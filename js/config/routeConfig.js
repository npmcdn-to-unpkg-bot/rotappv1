/// Usando o angular-ui-router
app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider
	.otherwise('/destinos');

	$stateProvider
	.state('novo', {
		url: '/novo', 
		templateUrl:'view/addDestino.html', 
		controller:'addDestinoCtrl'
	})

	.state('destinos', {
		url: '/destinos', 
		templateUrl:'view/destinos.html',
		
	})

	.state('destino', {
		url:'/destino/:id',
		templateUrl:'view/destino.html',
		controller: function($scope, $stateParams, destinosAPI){
			$scope.destinos = [];

			$scope.getDestinos = function(){
				destinosAPI.getData().success(function(data, status){
					$scope.destinos = data;
					$scope.destino = $scope.destinos[$stateParams.id - 1];
				}).error(function(data, status){
					console.log(data);
				});
			};

			$scope.getDestinos();
			
			$scope.idDestino = $stateParams.id;
			
			
		}					
	})

	.state('infiniteloop', {
		url:'/infinite-scroll',
		templateUrl:'view/destinos_loop.html',
		controller: function($scope, Reddit){
			$scope.reddit = new Reddit();
			
		}
	})


	

});