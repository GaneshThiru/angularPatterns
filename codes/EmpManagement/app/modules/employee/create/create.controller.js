(function ()
{
    'use strict';

    angular
        .module('create')
        .controller('createController', createController);

    function createController($scope,empApi){
     
       $scope.submit = function(){
          
        empApi.save({
      'id': $scope.id,
      'name': $scope.name,
      'designation': $scope.designation
    },
    function(response) {
       // alert("Response: "+ JSON.stringify(response));
    },
    function(error) {
      
        alert("err:"+JSON.stringify(error));
    });
       }

    }

})();

