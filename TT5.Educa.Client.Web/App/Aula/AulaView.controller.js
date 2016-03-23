angular.module('app').controller('ClassViewController', ['$scope','$http', function ($scope, $http) {
	(function(){
		$http.get('App/Aula/aula.js').then(function(data){
			$scope.List = data;
		});
	})();
}]);