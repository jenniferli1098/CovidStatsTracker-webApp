

var app = angular.module('myApp', [ 'ngRoute' ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'views/cover.html'})
    .when('/cityStats', { templateUrl: 'views/cityStats.html'})
    .when('/allStats', { templateUrl: 'views/allStats.html'})
    .when('/graphs', { templateUrl: 'views/graphs.html'})
    .otherwise({ redirectTo: '/' });
});


app.config(['$locationProvider',function($locationProvider){
	 $locationProvider.hashPrefix('');
}]);

app.controller('test', function($scope) {
  $scope.firstname = "John";
  $scope.lastname = "Doe";
});