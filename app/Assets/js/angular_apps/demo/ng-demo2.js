var app = angular.module('todoListDemo2', [])
    //provide the dependency(ies) as an array, with strings first, then the dependent function.
    //This prevents issues with minification from affecting Angular's dependency injection framework.
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: '/assets/js/angular_apps/demo/templates/todolist.html',
                controller: 'todoListCtrl'
            })
            .when('/:todoId',
                {
                    templateUrl: '/assets/js/angular_apps/demo/templates/todoitem.html',
                    controller: 'todoItemCtrl'
                });
    }])
    .controller('todoListCtrl', ['$scope', function ($scope) {
        //Initialize the todoList scope variable as an array
        $scope.todoList = [];
        $scope.reverseList = [];
        $scope.newTodo = '';

        $scope.addTodoItem = function(){
              $scope.todoList.push({
                 Id: 1000,
                  Title: $scope.newTodo,
                  DateAdded: moment(),
                  DateDue: moment().add('hours', 2)
              });

                $scope.newTodo = '';
        };
        var dateNow = new Date();
        
        //Use a fake web service (just local data) to push into the todoList
        $scope.loadTodos = function () {
            var wsResults = [{
                Id: 1,
                Title: 'Give cat a bath',
                DateAdded: moment().subtract('hours', 1).fromNow(),
                DateDue: moment().add('hours', 2)
        }, 
            {
                Id: 2,
                Title: 'Tend to wounds',
                DateAdded: moment().subtract('hours', 1).fromNow(),
                DateDue: moment().add('hours', 2.5)
            },
            {
                Id: 3,
                Title: 'Never do that again',
                DateAdded: moment().subtract('hours', 1).fromNow(),
                DateDue: moment().add('hours', 3)
            }];

            _.each(wsResults, function(val) { $scope.todoList.push(val); });

            var copyList = angular.copy($scope.todoList);
            $scope.reverseList = copyList.reverse();
        };
    }])
    .directive('todoItem', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                todolist: '='
            },
            template: '<ul><li ng-repeat="todo in todolist">{{todo.Id}} {{todo.Title}}</li></ul><div ng-transclude></ng-transclude>',
            link: function (scope, elem, attrs) {
            }
        };
    });
