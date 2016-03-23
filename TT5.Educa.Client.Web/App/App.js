angular.module('app', ['ngRoute'])

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController'
        }).
        when('/home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController'
        }).
        when('/resultado', {
            templateUrl: 'Views/Resultado.html',
            controller: 'ResultadoController'
        }).
        when('/planos', {
            templateUrl: 'Views/Plano/Planos.html',
            controller: 'PlansController'
        }).
        when('/plano/:id', {
            templateUrl: 'Views/Plano/Plano.html',
            controller: 'PlanoEditController'
        }).
        when('/aulas', {
            templateUrl: 'Views/aula/MyClasses.html',
            controller: 'AulaController'
        }).
        when('/aula/:id', {
            templateUrl: 'Views/aula/Class.html',
            controller: 'AulaController'
        }).
        otherwise({
            redirectTo: '/FileNotFound'
        });
  }])
.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(next, current) { 
        console.log($location.path());
    });
}])

