'use strict';
yii2AngApp_actor.factory("services", ['$http', '$location', '$route',
    function ($http, $location, $route){
        var obj = {};
        obj.getActors = function() {
            console.log(serviceBase + '/rest');
            return $http.get(   );
        }
    }
])