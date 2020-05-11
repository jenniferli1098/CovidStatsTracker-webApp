
var getDate = function () {
  var today = new Date();
  var dd = String(today.getDate() - 1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd ;
}

var app = angular.module('cityFinder', []);

app.controller('searchCtrl', function($scope, $http) {
    $scope.url = "oops no sd";
    $scope.search = "pennsylvania";

    $scope.datafields = [
    	{field: "New Confirmed", result: ""},
    	{field: "New Deaths", result: ""},
    	{field: "Total Active", result: ""},
    	{field: "Total Confirmed", result: ""},
    	{field: "Total Deaths", result: ""},
    	{field: "Fatality Rate", result: ""},
    	{field: "Country", result: ""},
    ];

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }


    $scope.fetch = function() {

      $scope.url = "https://covid-api.com/api/reports?date="+getDate()+"&q=" + $scope.search;
      
      $http.get($scope.url)
      .then(function(response){ $scope.data = response.data.data;
      		if ($scope.data.length == 0) {
      			return alert("no results");
            $scope.search = "";
      		}
      		else {
      			$scope.data = $scope.data[0];
      			let d = $scope.data;
      			$scope.datafields[0].result = d.confirmed_diff;
      			$scope.datafields[1].result = d.deaths_diff;
      			$scope.datafields[2].result = d.active;
      			$scope.datafields[3].result = d.confirmed;
      			$scope.datafields[4].result = d.deaths;
      			$scope.datafields[5].result = d.fatality_rate;
      			$scope.datafields[6].result = d.region.name;

    			$scope.cities = d.region.cities
      		}
      	});

      $scope.results = JSON.parse($scope.data);
      $scope.search = "";
    };

});