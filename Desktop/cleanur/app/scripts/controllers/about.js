'use strict';

/**
 * @ngdoc function
 * @name cleanurApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cleanurApp
 */
angular.module('cleanurApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
