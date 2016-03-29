angular.module('app', ['ngRoute'])

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/Index.html', {
            templateUrl: 'Views/Home/Home.html',
            controller: 'HomeController'
        }).
        when('/', {
            templateUrl: 'Views/Home/Home.html',
            controller: 'HomeController'
        }).
        when('/home', {
            templateUrl: 'Views/Home/Home.html',
            controller: 'HomeController'
        }).
        when('/resultado/:query', {
            templateUrl: 'Views/Resultado/Resultado.html',
            controller: 'ResultadoController'
        }).
        when('/planos', {
            templateUrl: 'Views/Plano/Planos.html',
            controller: 'PlanosController'
        }).
        when('/plano/:id', {
            templateUrl: 'Views/Plano/Plano.html',
            controller: 'PlanoViewController'
        }).
        when('/planoEdit/:id', {
            templateUrl: 'Views/Plano/PlanoEdit.html',
            controller: 'PlanoEditController'
        }).
        when('/aulas', {
            templateUrl: 'Views/Aula/Aulas.html',
            controller: 'AulasController'
        }).
        when('/aula/:id', {
            templateUrl: 'Views/Aula/Aula.html',
            controller: 'AulaViewController'
        }).
        when('/aula/:id', {
            templateUrl: 'Views/Aula/AulaEdit.html',
            controller: 'AulaEditController'
        }).
        otherwise({
            redirectTo: '/FileNotFound'
        });
  }])
.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(next, current) {         
    });
}])

