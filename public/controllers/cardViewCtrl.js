angular.module('myApp').controller('cardViewCtrl', function($scope, $http, $location, $sessionStorage) {

    // console.log("hai from card view controller");
    // console.log($sessionStorage.id);
     window.localStorage['customer'] = false;
    window.localStorage['status'] = true;
    var refresh = function() {
        $http.get('/cardViewData').then(function(response) {
            console.log("inside refresh function")
                // console.log(response);
            $scope.DataCust = response.data;

        });
    }



    $http.get('/cardViewData').then(function(response) {
         console.log(response.data);
        $scope.DataCust = response.data;
        $scope.removeData = function(id) {
            $http.delete('/deleteData/' + id).then(function(response) {
                refresh();
            });
        }

        $scope.edits = function(id,fname,lname) {
             $sessionStorage.fname = fname;
             $sessionStorage.lname = lname;
            $sessionStorage.customerId = id;
            $location.path('/editCustomer');
          }




    

    });

});