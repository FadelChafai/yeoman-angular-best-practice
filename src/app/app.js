(function(angular) {
    'use strict';

    var __env = {};

    /**
     * Import variables if present (from env.js)
     *
     * Phantomjs doesn't support Object.assign 
     * Install phantomjs-polyfill-object-assign :
     * npm install --save-dev phantomjs-polyfill-object-assign
     * Adding this ligne to karma.conf.js:
     * // endbower
     * 'node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
     */
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

    config.$inject = ['$urlRouterProvider', '$logProvider', '$resourceProvider'];

})(angular);
