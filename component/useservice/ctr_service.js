angular.module("myApp").controller("serviceCon",function($scope,testService){
    $scope.Test=testService.getInfo();
    $scope.test1="asss";
})