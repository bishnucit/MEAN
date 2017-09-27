'use strict';

/**
 * angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope,Movie) {
    $scope.movies = Movie.getList().$object;
  });
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope) {
    $scope.movies = [{title:"A new hope", url:"http://blbaba.com"},{title:"A new hope", url:"http://blbaba.com"},{title:"A new hope", url:"http://blbaba.com"},{title:"A new hope", url:"http://blbaba.com"}];
  });