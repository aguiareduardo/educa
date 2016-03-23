angular.module('app').controller('ClassesController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
	(function(){
		var id = $routeParams.idplan;
		$http.get('App/Aula/aulas.mock.js').then(function(data){
			$scope.List = data;
		});		
	})();
}]);