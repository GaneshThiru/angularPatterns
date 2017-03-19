(function ()
{
    'use strict';

    angular
        .module('delete')
        .controller('deleteController', deleteController);

    function deleteController(){
        alert('Delete controller');
    }

})();

