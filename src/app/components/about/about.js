(function() {
    'use strict';

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

    angular.module('myApp.about', ['ui.router'])
        .config(config)
        .controller('AboutCtrl', AboutCtrl);

    config.$inject = ['$stateProvider'];


})();
