(function ()
{
    'use strict';

    angular
        .module('employee.delete')
        .controller('deleteController', deleteController);

    function deleteController($scope,empApi){
        $scope. delete = function(obj){
            empApi.empById().delete({id:obj},
    function(response) {
           alert("Data updated successfully : "+ JSON.stringify(response));
    },
    function(error) {
        console.log(error)
        alert('sorry..no matching data');
        //alert("err:"+JSON.stringify(error.data));
    });
        }
    }

})();

