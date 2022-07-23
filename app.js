(function () {
    var mod = angular.module("myApp", ['ngRoute']);

    mod.config(function ($routeProvider,$locationProvider) {
        $routeProvider.when('/cplus', {
            templateUrl: "/component/view1/views/view1.html",
            controller: "cplussCon",

        }).when('/java/:firstName/:lastName', {   /// use url
            templateUrl: "/component/view2/views/view2.html",
            controller: "javaCon",
        })
        .when('/java', {   //use queery string
            templateUrl: "/component/view2/views/view2.html",
            controller: "javaCon",
        })
        .when('/form', {
            templateUrl: "/component/view3/views/view3.html",
            controller: "formCON",
        })
           
            .otherwise({
                redirectTo: "/cplus"
            });
        //  $locationProvider.html5Mode(
        //     {enabled:true,requireBase:false}
        //     );

    })
   
 

})()