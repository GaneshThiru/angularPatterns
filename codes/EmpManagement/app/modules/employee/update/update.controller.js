(function ()
{
    'use strict';

    angular
        .module('employee.update')
        .controller('updateController', updateController);

    function updateController(empApi,$scope){
        //alert('Update controller');

        $scope.search = function(idObj){
            empApi.empById().get({id:idObj},
    function(response) {

        $scope.validId = true;

        $scope.id - response.id;
        $scope.name = response.name;
        $scope.designation = response.designation;

       // alert("Data added successfully : "+ JSON.stringify(response));
    },
    function(error) {
        console.log(error)
        alert('sorry..no matching data');
        //alert("err:"+JSON.stringify(error.data));
    });
        }


        $scope.update = function(){
            var obj = {
                id : $scope.id,
                name : $scope.name,
                designation : $scope.designation
            }

            empApi.empById().update({id:obj.id},obj,
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

