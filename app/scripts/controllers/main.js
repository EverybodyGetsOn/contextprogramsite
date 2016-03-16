'use strict';
angular.module('reconstituteApp')
  .controller('MainCtrl', function ($scope, $http) {
        $scope.myData = [];
	    $http.get("http://reconstituteapi.azurewebsites.net/api/indexes")
	    .then(function mySucces(response) {
	        $scope.myData = response.data;
	    }, function myError(response) {
	        $scope.title = response.statusText;
	    });
});
