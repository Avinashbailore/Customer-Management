angular.module('myApp').controller('loginCtrl', function($scope, $http, $location, $sessionStorage) {
    $sessionStorage.login = false;
    window.localStorage['status'] = false;
    //Credentials Authentication...
    $scope.login = function(){
        $http.post('/user', $scope.user).then(function(response){ 
            if (response.data == null) {
                $scope.modals = true;
                alert("Email and password are incorrect Please enter your correct credentials!")
                $scope.user = "";
            } 
            else {
                $sessionStorage.login = true;
                $sessionStorage.id = response.data.email;
                console.log($sessionStorage.id);
                window.localStorage['status'] = true;
                $location.path('/cardView');
            }
        }, function() {
            console.log("login failed");
        });
    };

});