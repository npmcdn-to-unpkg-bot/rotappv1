angular.module('RotApp').factory('destinoSingleAPI', function($http){

	var destinos = [];

	$http.get('backend/getDestinos.php')
	.success(function(data, status){
		destinos = data;
		console.log(destinos);
	}).error(function(data, status){
		console.log('Erro ao pegar destinos $http');
	});

 	return {
		getSingle: function(idDestino) {
		      for (var i = 0; i < destinos.length; i++) {
		        if (parseInt(destinos[i].id_destino) === parseInt(idDestino)) {
		          return destinos[i];
		        }
		      }
		      return null;
		}		
	} // /return

});