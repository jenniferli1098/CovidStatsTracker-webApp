

var getDate = function () {
  var today = new Date();
  var dd = String(today.getDate() - 1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd ;
}

app.controller('allStatsCtrl', function($scope, $http) {
    $scope.url = "https://api.covid19api.com/summary";

    $scope.datafields = [];

    
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }

    $scope.fetch = function() {
      $scope.test = "";
      //alert("initialized");
      $http.get($scope.url)
      .then(function(response){
        $scope.data = response.data;
        $scope.countries = $scope.data.Countries;
        $scope.global = $scope.data.Global;

      });
      $scope.results = JSON.parse($scope.data);


    };

$scope.init = function (){
        fetch();
    }
});