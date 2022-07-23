angular.module("myApp").controller("usehttpCon",function($scope,characterFactory,$http){


    // $http.get('https://www.breakingbadapi.com/api/characters').then(
    //     function(data){
    //         $scope.allcha=data;

    //     }
    // )

    characterFactory.getAll()
    .then(function(data){
    $scope.mess="hello";
    $scope.allcha=data;

    });
    // .error(function(){

    // });
});