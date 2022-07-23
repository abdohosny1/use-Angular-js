angular.module("myApp").controller("providerCon",function($scope,func,url,urlObject){
    $scope.name=func;
    $scope.useConstant=url;
    $scope.useConstantObject=urlObject.urlemp;
    $scope.message="Hello Abdelaliem Hosny";

})