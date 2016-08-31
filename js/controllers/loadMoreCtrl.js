app.controller('loadMoreCtrl', function($scope){

	$scope.loadMoreBtnTxt = 'Carregar mais';

	$scope.array = [
		{
			nome:'Atlanta', 
			imgurl:'https://static.pexels.com/photos/4164/landscape-mountains-nature-mountain.jpeg', 
			descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
		{
			nome:'São Paulo', 
			imgurl:'https://static.pexels.com/photos/4164/landscape-mountains-nature-mountain.jpeg', 
			descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
		{
			nome:'Salvador', 
			imgurl:'https://static.pexels.com/photos/4164/landscape-mountains-nature-mountain.jpeg', 
			descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
		{
			nome:'Rio de Janeiro', 
			imgurl:'https://static.pexels.com/photos/4164/landscape-mountains-nature-mountain.jpeg', 
			descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
		{
			nome:'San Diego', 
			imgurl:'https://static.pexels.com/photos/4164/landscape-mountains-nature-mountain.jpeg', 
			descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		},
		{
			nome:'Las Vegas', 
			imgurl:'https://static.pexels.com/photos/4164/landscape-mountains-nature-mountain.jpeg', 
			descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		}				

	];

	Array.prototype.remove = function(){
		console.log('Removendo itens do arrays')
	    var args = Array.apply(null, arguments);
	    var indices = [];
	    for(var i = 0; i < args.length; i++){
	        var arg = args[i];
	        var index = this.indexOf(arg);
	        while(index > -1){
	            indices.push(index);
	            index = this.indexOf(arg, index + 1);
	        }
	    }
	    indices.sort();
	    for(var i = 0; i < indices.length; i++){
	        var index = indices[i] - i;
	        this.splice(index, 1);
	    }    
	};

	$scope.destinos = [];
	$scope.n = $scope.array.length;
	
	var i = 0;

	$scope.loadMore = function(){

		if($scope.n !== 0){
			
			console.log('LENGTH: ' + $scope.n + ' /' + 'i: ' + i);
			
			$scope.destinos.push($scope.array[i], $scope.array[i + 1], $scope.array[i + 2]);
			//$scope.array.remove($scope.array[i], $scope.array[i + 1], $scope.array[i + 2]);
			
			console.log($scope.array);
			
			i = i + 3;
			
			$scope.n  = $scope.n - 3;
			console.log('N é: ' + $scope.n);
		
		}else{
			$scope.loadMoreBtnTxt = 'Sem mais resultados';
		}
	};

})