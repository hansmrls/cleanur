'use strict';

/**
 * @ngdoc function
 * @name cleanurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cleanurApp
 */
angular.module('cleanurApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
