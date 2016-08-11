angular.module('RotApp').controller('destinoCtrl', function($scope, $routeParams, destinoSingleAPI){
	$scope.idDestino = $routeParams.idDestino;
	$scope.destino = destinoSingleAPI.getSingle($scope.idDestino);
	console.log($scope.destino);

});