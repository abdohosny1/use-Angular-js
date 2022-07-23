angular.module("myApp").controller("javaCon",function($scope,$stateParams){
    $scope.name="Hosny ";
    // $scope.m1=$routeParams.firstName;
    // $scope.m2=$routeParams.lastName;

    $scope.m1=$stateParams.firstName;
    $scope.m2=$stateParams.lastName;



})