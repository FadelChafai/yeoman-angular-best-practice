(function() {
'use strict';

/**
 * @ngdoc function
 * @name bstrapdevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bstrapdevApp
 */

angular.module('bstrapdevApp').controller('MainCtrl', MainCtrl);

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
