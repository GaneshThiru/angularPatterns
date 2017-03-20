(function ()
{
    'use strict';

    angular
        .module('employee.create')
        .controller('createController', createController);

    function createController($scope,empApi,empService){
     
       $scope.submit = function(){
          
        empApi.employees().save({
      'id': $scope.id,
      'name': $scope.name,
      'designation': $scope.designation
    },
    function(response) {
        alert("Data added successfully : "+ JSON.stringify(response));
        
        empService.setData (response);

      //  alert(empService.getData());

    },
    function(error) {
        console.log(error)
        alert("err:"+error.data);
    });
       }

    }

})();

