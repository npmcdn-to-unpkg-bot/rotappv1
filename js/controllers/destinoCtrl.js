angular.module('RotApp').controller('destinoCtrl', function($scope, $stateParams, destinoSingleAPI){
	$scope.idDestino = $stateParams.idDestino;
	$scope.destino = destinoSingleAPI.getSingle($scope.idDestino);
	console.log($scope.destino);

});