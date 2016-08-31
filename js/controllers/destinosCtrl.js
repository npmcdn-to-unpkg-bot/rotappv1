app.controller('destinosCtrl', function($scope, Reddit, categoriasAPI){
	
	$scope.reddit = new Reddit();

	$scope.categoria = "Passeio";
	$scope.categorias = [];
	
	categoriasAPI.getData().success(function(data, status){
		$scope.categorias = data;
	}).error(function(data, status){
		console.log(data);
	});

	$scope.selCat = function(){
		angular.element('#catSelector').fadeIn();
		angular.element('#rootOverflow').fadeIn();
	};

	$scope.selCid = function(){
		angular.element('#cidSelector').fadeIn();
		angular.element('#rootOverflow').fadeIn();		
	};

	$scope.closeSelectors = function(){
		angular.element('#catSelector').hide();
		angular.element('#cidSelector').hide();
		angular.element('#rootOverflow').fadeOut();		
	}
			
})