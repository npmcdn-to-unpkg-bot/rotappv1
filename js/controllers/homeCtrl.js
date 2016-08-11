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

	$scope.rateFunction = function(rating) {
		var _url = 'your service url';
		var data = {
		   rating: rating
		};
	 
		$http.post( _url, angular.toJson(data), {cache: false})
			.success( function(data){
				//success(data);
			}).error(function(data){
			//error(data);
		});
	};	

	$scope.getDestinos();
});
