(function ()
{
    'use strict';

    angular
        .module('create')
        .controller('createController', createController);

    function createController(){
       alert('Create controller');

       $scope.submit = function(){
           alert("inside submit..")
       }

    }

})();

