angular.module("myApp").factory("productFactory",function(){
 
    var produts=[
        {id:1,name:"mobile",price:20},
        {id:2,name:"labtop",price:30},
        {id:3,name:"clothees",price:50},
        {id:4,name:"book",price:10},
        {id:5,name:"food",price:80},
        {id:6,name:"car",price:1220},
    ];
    return {
        getProduct:function(){
            return produts;
        },
        addProduct:function(obj){
            produts.push(obj);
        }
    }
});