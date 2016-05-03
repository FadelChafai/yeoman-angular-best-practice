(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name myApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the myApp
   */
  angular.module('myApp')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
})();
