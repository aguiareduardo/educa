angular.module('app')
.controller('AulaViewController', ['$scope','$http', function ($scope, $http) {
	(function(){
		$http.get('App/Aula/aula.js').then(function(data){
			$scope.List = data;
		});
	})();
}]);