(function ()
{
    'use strict';

    angular
        .module('employee.create')
        .controller('createController', createController);

    function createController($scope,empApi){
     
       $scope.submit = function(){
          
        empApi.employees().save({
      'id': $scope.id,
      'name': $scope.name,
      'designation': $scope.designation
    },
    function(response) {
        alert("Data added successfully : "+ JSON.stringify(response));
    },
    function(error) {
        console.log(error)
        alert("err:"+error.data);
    });
       }

    }

})();

