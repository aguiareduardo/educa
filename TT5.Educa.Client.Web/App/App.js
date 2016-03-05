angular.module('app', ['ngRoute'])

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/Home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController'
        }).
        when('/', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController'
        }).
        when('/Resultado', {
            templateUrl: 'Views/Resultado.html',
            controller: 'ResultadoController'
        }).
        otherwise({
            redirectTo: '/FileNotFound'
        });
  }]);