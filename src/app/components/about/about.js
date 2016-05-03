(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name myApp.about.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the myApp.about
   */
  angular.module('myApp.about', ['ui.router'])
    .config(config)
    .controller('AboutCtrl', AboutCtrl);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
      $stateProvider
          .state('about', {
              url: '/about',
              templateUrl: 'app/components/about/about.html',
              controller: 'AboutCtrl',
              controllerAs: 'vm'
          });
  }

  function AboutCtrl() {
      var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
})();
