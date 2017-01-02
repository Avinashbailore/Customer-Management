angular.module('myApp').controller('addCustCtrl', function($scope, $http, $location) {
    window.localStorage['status'] = true;
    var refresh = function() {
        $http.get('/cardViewData').then(function(response) {
            $scope.DataCust = response;

        });
    }
    //Adding a new customer
    $scope.addCustomer = function() {
        $http.post('/addCust', $scope.cust).then(function(response) {
            if (response.data = null) {
                console.log("didnt insert");
            } else 
            {        
                $scope.DataCust = response.data;
                $location.path("/addedCustomer");
            }
        }, function() {

            console.log("login failed");
        });
    };


    $scope.cancel = function() 
    {
        $location.path('/cardView');
    }

});