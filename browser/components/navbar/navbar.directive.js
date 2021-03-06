'use strict';

app.directive('navbar', function ($state, $location) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/navbar/navbar.html',
		controller: 'LoginController',
		link: function (scope) {
			console.log(scope);
			scope.pathStartsWithStatePath = function (state) {
				var partial = $state.href(state);
				var path = $location.path();
				return path.startsWith(partial);
			};


		}
	}
});
