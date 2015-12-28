(function () {
  angular.module('RecursiveSampleApp', [
    'ngRoute'
  ])
	.config(config);
  
  // Configure the routes.
	function config($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			})

			.otherwise({
				redirectTo: '/'
			});
	};
	 
})();