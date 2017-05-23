var app = angular.module('myApp', []);

app.controller('myController', function ($scope, $http) {
    $http.get("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json").then(function (response) {
        $scope.package = response.data.elements;
    });
});

app.controller('moreInformation', function ($scope){
    
});
