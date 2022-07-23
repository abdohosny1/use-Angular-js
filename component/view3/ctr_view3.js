angular.module("myApp").controller("formCON",function($scope,$location,$state){
    $scope.name="Hosny ";
    $scope.firstName="";
    $scope.lastName="";
    $scope.Transfer=function(){

        // use url
      //  $location.path("/java/"+$scope.firstName+"/"+$scope.lastName);

        //use query string
        // $location.path("/java").search("firstName",$scope.firstName).search("lastName",$scope.lastName);

        //use angular ui router
        $state.go("java",{firstName:$scope.firstName,lastName:$scope.lastName});

        // $state.go("java",null,{notify:false,reload:false});



    }


})