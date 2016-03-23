angular.module('app')
.controller('AulaController', ['$scope', '$http','$routeParams', function ($scope, $http,$routeParams) {
	$scope.Search = function() {
		var id = $routeParams.id; 
		$http.get('aula.js').then(function(respose){
			$scope.Data = response;
		});
	};		

}]);