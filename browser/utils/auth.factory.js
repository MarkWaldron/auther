'use strict';

app.factory('Auth', function ($http, User) {
  function Auth (props) {
    console.log(props)
  	angular.extend(this, props);
  }

  Auth.createNewUser = function(email, password){

    return $http.post('/auth/signup', {email: email, password: password})
		.then(function (res) {
			return res;
		})
    .then(null, function(err){
      console.log(err);
    });
  };

  Auth.loginUser = function(email, password){
    return $http.post('/auth/login', {email: email, password: password})
    .then(function(res){
      return res
    })
    .then(null, function(err){
      console.log(err);
    });
  };

  return Auth;
});
