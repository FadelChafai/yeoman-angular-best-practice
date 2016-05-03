(function(angular) {
  'use strict';

  /**
   * @ngdoc overview
   * @name bstrapdevApp
   * @description
   * Main module of the application.
   */

  var __env = {};

  // Import variables if present (from env.js)

  if (window) {
    Object.assign(__env, window.__env);
  }

  function config($urlRouterProvider, $stateProvider, $logProvider, $resourceProvider, __env) {

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $logProvider.debugEnabled(__env.enableDebug);

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/home/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutCtrl'
      });
  }

  angular
    .module('bstrapdevApp', [
      'ngResource',
      'ui.router',
      'ngSanitize',
      'ngTouch',
      'ui.sortable'
    ])
    .config(config)
    .constant('__env', __env);

})(angular);
