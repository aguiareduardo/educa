angular.module('app').controller('AulasController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
	(function(){		
		$http.get('App/Aula/aulas.mock.js').then(function(data){
			$scope.List = data;
		});		
	})();
}]);