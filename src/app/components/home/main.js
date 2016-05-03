(function() {
'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */

angular.module('myApp').controller('MainCtrl', MainCtrl);

function MainCtrl($scope) {

  $scope.todos = [];

  $scope.addTodo = function() {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
  };
}
})();
