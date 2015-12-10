'use strict';

app.controller('LoginController', function ($scope, Auth) {
  console.log($scope);
  $scope.loginUser = function(email, password){
    Auth.loginUser(email, password)
    .then(function(res){
      $scope.currentUser = res.data;
      console.log('Login Scope CU: ', $scope.currentUser);
    })
    .then(null, function(err){
      console.log(err)
    });
  }

  $scope.logout = function () {
  	Auth.logout()
  	.then(function(res){
      $scope.currentUser = false;
      console.log('Logout Scope CU: ',$scope.currentUser);
    })
    .then(null, function(err){
      console.log(err)
    });
  }

});
