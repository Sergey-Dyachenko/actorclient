'use strict';

var serviceBase = 'http://actor.local';

var yii2AngApp = angular.module('yii2AngApp', [
    'ngRoute',
    'yii2AngApp.site',
    'yii2AngApp.actor'
]);

var yii2AngApp_site = angular.module('yii2AngApp.site', ['ngRoute']);
var yii2AngApp_actor = angular.module('yii2AngApp.actor', ['ngRoute']);

yii2AngApp.config(['$routeProvider', function ($routeProvider){
    $routeProvider.otherwise({redirectTo: '/actor/index'});
}]);

