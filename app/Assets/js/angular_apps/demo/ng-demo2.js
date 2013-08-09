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
        $scope.someScopeVar = '';
        $scope.alertValue = function(){
          alert($scope.someScopeVar + ' is set, and is also awesome.');
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
        };
    }])
    //provide an editor input with autocomplete for each permission grant type (Level, Scope, Flags)
    .directive('todoItem', function () {
        return {
            restrict: 'E',
            scope: {
                //The binding for an ng-repeated PermissionGrant (ex. grnt)
                itemName: '='
            },
            template:
                '<div class="panel panel-success"><div class="panel-heading panel-heading-compact">Assigned</div>' +
                    '<div class="tags">' +
                        '<a ng-repeat="(idx, permLvl) in assignedPermType" class="tag" ng-click="remove(permLvl)">{{permLvl}}&nbsp;&times;</a>' +
                    '</div>' +
                '</div>' +
                '<div class="panel" ng-show="availablePermType.length"><div class="panel-heading panel-heading-compact">Available</div>' +
                    '<div class="tags">' +
                        '<a ng-repeat="(idx, permLvl) in availablePermType" class="tag" ng-click="add(permLvl)">{{permLvl}}&nbsp;&plus;</a>' +
                    '</div>' +
                '</div>',
            link: function (scope, elem, attrs) {
                scope.remove = function (elValue) {
                    scope.assignedPermType = _.without(scope.assignedPermType, elValue);
                    scope.availablePermType.push(elValue);
                };
                scope.add = function (elValue) {
                    scope.availablePermType = _.without(scope.availablePermType, elValue);
                    scope.assignedPermType.push(elValue);
                };
                scope.$watch('itemName', function (newVal, oldVal) {
                    scope.grantBinding[attrs.grantStringType] = _(newVal).toString();
                });
            }
        };
    });
