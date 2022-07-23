

angular.module("myApp").controller("facroryCon",function($scope,productFactory){
  
        
$scope.products=productFactory.getProduct();

$scope.AddProduct=function(){
    var prop={id:6,name:"new Item",price:54};
    productFactory.addProduct(prop);
    
}

})