var app = angular.module('app', ['ui.router']);

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '718951674877599',
      xfbml      : true,
      version    : 'v2.7'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider
	.otherwise('/home');

	$stateProvider
	
	.state('home', {
		url: '/home', 
		templateUrl:'view/home.html', 
		controller:'homeCtrl'
	})

	.state('welcome', {
		url: '/welcome',
		templateUrl:'view/welcome.html',
		controller:'homeCtrl'
	});
})


app.controller('homeCtrl', function($rootScope, $scope, $state){
	$scope.title = "# FB API Test";
	$rootScope.user;
	$scope.FBLogin = function(){
		console.log('FbLogin..');
		FB.login(function(response){
			if(response.authResponse){
				console.log('Welcome! Fetching your info...');
				FB.api('/me', {fields: 'id, name, picture'}, function(response){
					console.log('Good to see you, ' + response.name + '.');
					console.log(response);
					// Aprender a usar CAllbacks..
					$rootScope.iduser = response.id;
					$rootScope.user = response.name;
					$rootScope.profilepic = response.picture.data.url;
					console.log(response.picture.data.url);
					//var accessToken = FB.getAuthResponse().accessToken;
					//console.log(accessToken);
					$state.go('welcome');

				});
			} else {
				console.log('User cancelled login..or did not fully authorize.');
			}
		});	
	};

	$scope.FBLogout = function(){
		console.log('Logout()..');
		FB.logout(function(response) {
		  // user is now logged out
		});		
		$state.go('home');
	}

});