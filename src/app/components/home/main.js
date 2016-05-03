(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name myApp.home.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the myApp.home
     */

    angular.module('myApp.home', ['ui.router'])
        .config(config)
        .controller('MainCtrl', MainCtrl);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/main.html',
                controller: 'MainCtrl',
                controllerAs: 'vm'
            });
    }

    function MainCtrl() {

        var vm = this;
        vm.todos = [];
        vm.addTodo = addTodo;
        vm.removeTodo = removeTodo;

        function addTodo() {
            vm.todos.push(vm.todo);
            vm.todo = '';
        }

        function removeTodo(index) {
            vm.todos.splice(index, 1);
        }
    }
})();
