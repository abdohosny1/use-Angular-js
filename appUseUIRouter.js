(function () {
    var mod = angular.module("myApp", ['ui.router']);

    mod.config(function ($stateProvider,$locationProvider) {
        // funcProvider.setMess="Hello Abdo";
        $stateProvider.state('cplus', {
            url:"/cplus",
            templateUrl: "/component/view1/views/view1.html",
            controller: "cplussCon",

        })
        // .state('java1', {
        //     url:"/java/:firstName/:lastName",   /// use url
        //     templateUrl: "/component/view2/views/view2.html",
        //     controller: "javaCon",
        // })
        .state('java', {   //use queery string
            url:"/java/:firstName/:lastName",
            templateUrl: "/component/view2/views/view2.html",
            controller: "javaCon",
        })
        .state('form', {
            url:"/form",
            templateUrl: "/component/view3/views/view3.html",
            controller: "formCON",
        })
        .state('factory', {
            url:"/factory",
            templateUrl: "/component/useFactory/views/factoryview.html",
            controller: "facroryCon",
        })
        .state('service',{
            url:'/service',
            templateUrl:"/component/useservice/views/useservice.html",
            controller:"serviceCon"

        })
        .state('providertest',{
            url:'/providertest',
            templateUrl:"/component/useProvider/views/testprovider.html",
            controller:"providerCon"

        })
        .state('useHttp',{
            url:'/usehttp',
            templateUrl:"/component/useHttp/views/getall.html",
            controller:"usehttpCon"

        })

       
           
            // .otherwise({
            //     redirectTo: "/cplus"
            // });
        //  $locationProvider.html5Mode(
        //     {enabled:true,requireBase:false}
        //     );

    })
   
 

})()