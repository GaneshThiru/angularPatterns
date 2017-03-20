(function ()
{
    'use strict';

    angular
        .module('employee.read')
        .controller('readController', readController);

    function readController(empApi,$scope){
    empApi.employees().query({},
    function(response) {
        $scope.empArr = response;        
    },
    function(error) {      
        alert("err:"+JSON.stringify(error));
    });
    }

})();

