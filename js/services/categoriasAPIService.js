angular.module('RotApp').factory('categoriasAPI', function($http){

	var _getCategorias = function(){
		return $http.get('backend/getCategorias.php');
	}

 	return {
		getData: _getCategorias,
	}

});