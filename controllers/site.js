'use strict';

yii2AngApp_site.config(['$routeProvider' , function ($routeProvider){
    $routeProvider
    .when('site/index', {
        templateUrl : 'views/site/index.html',
        controller : 'index'
    })
    .when('site/about', {
        templateUrl : 'views/site/about.html',
        controller: 'about'
    })
    .otherwise({
        redirectTo: '/site/index'
    });
}])

.controller('index', ['$scope', '$http', function($scope, $http){
    $scope.message = 'You read main page';
}])
.controller('about', ['$scope', '$http', function($scope, $http){
    $scope.message = 'You read about page';
}])


