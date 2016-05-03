(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name bstrapdevApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the bstrapdevApp
   */
  angular.module('bstrapdevApp')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
})();
