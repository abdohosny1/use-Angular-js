angular.module("myApp").factory("characterFactory",function($http){
 
  function getAllCharacter(){
    // $http({
    //     method:'Get',
    //     url:'https://www.breakingbadapi.com/api/characters'})
    return $http.get('https://www.breakingbadapi.com/api/characters');
    }

    return {
        getAll:getAllCharacter
    }
});