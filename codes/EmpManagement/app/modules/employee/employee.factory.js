(function ()
{
    'use strict';

    angular
        .module('employee')
        .factory('empApi', employeeFactory);

    function employeeFactory($resource){

       return $resource('http://localhost:3000/employees');

    }

})();

