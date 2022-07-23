angular.module('myApp').service("testService",function(){
    //when use id public use this
    this.id=1;
    
    //when use name private use var 
    //  var name="abdo";
    this.name="abdo";
    this.getInfo=function(){
        return this.id +"" +this.name;
    }
})