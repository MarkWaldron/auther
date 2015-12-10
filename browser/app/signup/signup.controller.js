'use strict';

app.controller('SignupController', function ($scope, Auth) {
  $scope.signup = function(email, password){
    Auth.createNewUser(email, password)
    .then(function(res){
      console.log('Welcome!')
      console.log('User: ', res.data)
    })
    .then(null, function(err){
      console.log('goodbye')
      console.log(err);
    });
  }
});
