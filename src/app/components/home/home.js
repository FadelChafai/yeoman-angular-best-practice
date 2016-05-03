(function() {
    'use strict';

    function config($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            });
    }

    function HomeCtrl() {

        var vm = this;

        vm.addTodo = addTodo;
        vm.removeTodo = removeTodo;
        vm.todos = [];

        function addTodo() {
            vm.todos.push(vm.todo);
            vm.todo = '';
        }

        function removeTodo(index) {
            vm.todos.splice(index, 1);
        }
    }

    angular.module('myApp.home', ['ui.router'])
        .config(config)
        .controller('HomeCtrl', HomeCtrl);

    config.$inject = ['$stateProvider'];


})();
