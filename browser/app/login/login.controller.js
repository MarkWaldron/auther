'use strict';

app.controller('LoginController', function ($scope, Auth) {
  $scope.loginUser = function(email, password){
    Auth.loginUser(email, password)
    .then(function(res){
      console.log(res)
      
    })
    .then(null, function(err){
      console.log(err)
    });
  }
});
