angular.module('myApp').controller('editCustCtrl', function($scope, $http, $location, $sessionStorage) {
    window.localStorage['status'] = true;
    $scope.fname = $sessionStorage.fname;
    $scope.lname = $sessionStorage.lname;
    var id = $sessionStorage.customerId
    $http.get('/request/' + id).then(function(response) {
        $scope.edit = response.data;
    });
    //Updating the selected customer
    $scope.updateCustomer = function() {
        $http.post('/editedData', $scope.edit).then(function(response) {
            $location.path('addedCustomer');
        })
    }
    //Delete the selected customer
    $scope.deleteCustomer = function() {
        var id = $scope.edit._id;
        $http.delete('/deleteData/' + id).then(function(response) {
            $location.path('/cardView');
        });
    }
});