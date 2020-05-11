

var getDate = function () {
  var today = new Date();
  var dd = String(today.getDate() - 1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd ;
}

var app = angular.module('allStatsTracker', []);

app.controller('allStatsCtrl', function($scope, $http) {
    $scope.url = "https://api.covid19api.com/summary";
/*
Country: "Afghanistan",
CountryCode: "AF",
Slug: "afghanistan",
NewConfirmed: 255,
TotalConfirmed: 4033,
NewDeaths: 6,
TotalDeaths: 115,
NewRecovered: 30,
TotalRecovered: 502,
Date: "2020-05-11T04:00:08Z"
*/

    $scope.datafields = [];

    $scope.init = function (){
        fetch();
    }
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }


    $scope.fetch = function() {
      $scope.test = "";
      alert("initialized");
      $http.get($scope.url)
      .then(function(response){
        $scope.data = response.data;
        $scope.countries = $scope.data.Countries;
        $scope.global = $scope.data.Global;
      });
      $scope.results = JSON.parse($scope.data);



    };

});