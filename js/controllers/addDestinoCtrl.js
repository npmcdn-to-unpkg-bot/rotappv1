app.controller('addDestinoCtrl', function ($scope, Upload, $timeout, categoriasAPI) {

	categoriasAPI.getData().success(function(data, status){
		$scope.categorias = data;
		console.log($scope.categorias);
	});


	$scope.evtProgress = 0;
    
    $scope.submit = function() {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };

    $scope.upload = function (file) {
        Upload.upload({
            url: 'backend/uploadImg.php',
            data: {
            	file: file, 
            	'username': $scope.username,
            	'targetPath':'../upload/'
            },
            method: 'POST'

        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            $scope.evtProgress = parseInt(100.0 * evt.loaded / evt.total);
            angular.element('#imgFileBrowser').fadeOut();
            angular.element('#imgFileSubmitBtn').fadeOut();

            console.log('progress: ' + $scope.evtProgress + '% ' + evt.config.data.file.name);
        });
    };
});