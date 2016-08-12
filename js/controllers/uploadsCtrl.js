app.controller('uploadsCtrl', function($scope, Upload, $timeout, $parse){

/* ----------------------------------------------- */

/**
	
	$scope.upload #;
	$scope.evtProgress #;
	
	view: ------------------ |
	
	#imgFileBrowser #
	#imgFileSubmitBtn #
	myForm #
	ng-model="picFile #"
**/

	// passar parametros para o método upload

	$scope.itens = [];
	$scope.passos = [];
	$scope.picFile = '';
	$scope.addItem = function(){
		var n = $scope.itens.length + 1;
		$scope.itens.push(n);
		$scope.evtProgress = 0;
	};

	$scope.upload = function (index, file) {
			
			$scope.evtProgress = 0;

			// var evtProgressString = 'evtProgress' + index;
			// var model = $parse(evtProgressString);
			// model.assign($scope, index);
			// console.log('>');
			// console.log($scope['evtProgress'+index]);
			
	        Upload.upload({
	            url: 'backend/uploadImg.php',
	            data: {
	                file: file, 
	                'username': $scope.username,
	                'targetPath':'../upload/'
	            },
	            method: 'POST'

	        }).then(function (resp) {
	        	// Criar adicionar objeto
	        	$scope.passos.push(
	        	{
	        		nome: 'Nome',
	        		imgurl: $scope.picFile.name
	        		
	        	});

	        	console.log($scope.passos);

	            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
	        }, function (resp) {
	            console.log('Error status: ' + resp.status);
	        }, function (evt) {

	            $scope.evtProgress = parseInt(100.0 * evt.loaded / evt.total);
				angular.element('#progressDone' + index).fadeIn();	            	            
	            angular.element('#imgFileBrowser' + index).fadeOut();
	            angular.element('#imgFileSubmitBtn' + index).fadeOut();

	            console.log('progress: ' + $scope.evtProgress + '% ' + evt.config.data.file.name);
	        });
	    };
	


});