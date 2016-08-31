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
		url:'/destino/:slug',
		templateUrl:'view/destino.html',
		controller: function($scope, $stateParams, destinosAPI){
			$scope.destinos = [];

			$scope.getDestinos = function(){
				destinosAPI.getData().success(function(data, status){
					$scope.destinos = data;
					//$scope.destino = $scope.destinos[$stateParams.id - 1];

					for(var i=0; i< $scope.destinos.length; i++){
						if($scope.destinos[i].slug == $stateParams.slug){
							$scope.destino = $scope.destinos[i];
						}
					}

				}).error(function(data, status){
					console.log(data);
				});
			};


			$scope.getDestinos();
			
			$scope.slug = $stateParams.slug;
		
			$scope.url = function(){
				console.log('executou..');
				//$location.path('/destino/cidade').replace();	
			}

			$scope.url();			
			
		}					
	})

	.state('infiniteloop', {
		url:'/infinite-scroll',
		templateUrl:'view/destinos_loop.html',
		controller: 'destinosCtrl'
	})

	.state('load', {
		url:'/load-more',
		templateUrl:'view/load_more.html',
		controller: 'loadMoreCtrl'
	})


	

});