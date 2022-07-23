angular.module("myApp").provider("func",function(){
    var mess="hiiiii";

    this.$get=function(){
        return mess;
    }

    this.setMess=function(va){
        mess=va;
    }

})


angular.module("myApp").constant("url","Take URL");
angular.module("myApp").constant("urlObject",{
    urlemp:"Employee url",
    urlstudent:"Stucent url"
});

//make directive

angular.module("myApp").directive("helloWorld",function(){
    return {
        replace:true, 
        restrict:"E",
        // template:"<h3>Hello World</h3>"
        // template:"<h3>{{message}}</h3>"
        //  templateUrl:"/component/useProvider/views/dirhello.html"
        templateUrl:"/component/useProvider/views/dirhello.html",
        link:function(scope,elem,attrs){
               elem.dataPicker();
        }


    }
});

angular.module("myApp").directive("dataPicker",function(){
    return {
        replace:true, 
        restrict:"AEC",
        templateUrl:"/component/useProvider/views/dirhello.html",
        link:function(scope,elem,attrs){
               elem.dataPicker();
        }
    }
});
