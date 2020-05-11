
var getDate = function () {
  var today = new Date();
  var dd = String(today.getDate() - 1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd ;
}

var app = angular.module('allStatsTracker', []);

app.controller('allStatsCtrl', function($scope, $http) {
    $scope.url = "https://api.covid19api.com/countries";

    $scope.datafields = [
    	{field: "New Confirmed", result: ""},
    	{field: "New Deaths", result: ""},
    	{field: "Total Active", result: ""},
    	{field: "Total Confirmed", result: ""},
    	{field: "Total Deaths", result: ""},
    	{field: "Fatality Rate", result: ""},
    	{field: "Country", result: ""},
    ];

    $scope.init = function (){
        fetch();
    }
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }


    $scope.fetch = function() {
      alert("initialized");
      $scope.url = "https://covid-api.com/api/reports?date="+getDate()+"&q=ontario";
      $http.get($scope.url)
      .then(function(response){
        $scope.data = response.data;
      });

      alert("data"+$scope.data);
      $scope.results = JSON.parse($scope.data);
      alert("results"+$scope.results);

    };

});