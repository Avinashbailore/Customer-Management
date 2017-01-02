angular.module('myApp').controller('orderCtrl', function($scope, $http, $location, $sessionStorage) {
    window.localStorage['status'] = true;
    // getting the data from server
    $http.get('/totalOrders').then(function(response) {
        $scope.totalOrders = response.data;
    });
});