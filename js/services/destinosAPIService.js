angular.module('RotApp').factory('destinosAPI', function($http){

	var _getDestinos = function(){
		return $http.get('backend/getDestinos.php');
	}

 	return {
		getData: _getDestinos,
	}

});