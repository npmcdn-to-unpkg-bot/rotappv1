app.controller('homeCtrl', function($scope, $http, destinosAPI){
	$scope.appName = "Travel App";
	
	$scope.destinos = [];

	$scope.getDestinos = function(){
		destinosAPI.getData().success(function(data,status){
			//console.log(data);
			$scope.destinos = data;
		}).error(function(data, status){

		});
	};

	$scope.getDestinos();
});
