angular.module('myApp').controller('detailsCtrl', function($scope, $http, $location, $sessionStorage, $routeParams) {
    window.localStorage['status'] = true;
    $scope.fname = $routeParams.fname;
    $scope.lname = $routeParams.lname;
    $scope.city = $routeParams.city;
    $scope.state = $routeParams.state;
    var fname = $scope.fname;
    // getting the data from server
    $http.get('/getData/' + fname).then(function(response) {
        $scope.myOrderData = response.data;
        
    })
});