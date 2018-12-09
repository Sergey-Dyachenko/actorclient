'use strict';

var app = angular.module('yii2AngApp.actor');

app.service('LeaseService', function($http) {
    this.get = function() {
        return $http.get(serviceBase + '/rest');
    };
});

yii2AngApp_actor.config(['$routeProvider', function ($routeProvider){
    $routeProvider
    .when('/actor/index', {
        templateUrl : 'views/actor/index.html',
        controller : 'index'
    })
    .otherwise({
        redirectTo: '/actor/index'
    });
}]);
console.log('actor controller');
yii2AngApp_actor.controller('index', ['$scope', 'LeaseService', 

function ($scope, LeaseService){
        $scope.server_url = serviceBase;
        LeaseService.get().then(function (data) {
            if (data.status == 200)
                $scope.actors = data.data;
        }, function (err) {
            console.log(err);
        })  
    
}])