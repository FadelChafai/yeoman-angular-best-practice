(function(angular) {
  'use strict';

  var __env = {};

  // Import variables if present (from env.js)
  if (window) {
    Object.assign(__env, window.__env);
  }

  function config($urlRouterProvider, $logProvider, $resourceProvider) {

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $logProvider.debugEnabled(__env.enableDebug);

    $urlRouterProvider.otherwise('/');
  }

  angular.module('myApp', [
      'ngResource',
      'myApp.home',
      'myApp.about'
    ])
    .config(config)
    .constant('__env', __env);

})(angular);
/*
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
*/
