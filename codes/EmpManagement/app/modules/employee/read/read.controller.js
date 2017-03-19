(function ()
{
    'use strict';

    angular
        .module('read')
        .controller('readController', readController);

    function readController(empApi,$scope){
    empApi.query({},
    function(response) {
        $scope.empArr = response;        
    },
    function(error) {      
        alert("err:"+JSON.stringify(error));
    });
    }

})();

