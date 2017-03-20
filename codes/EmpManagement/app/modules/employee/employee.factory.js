(function ()
{
    'use strict';

    angular
        .module('employee')
        .factory('empApi', employeeFactory);

    function employeeFactory($resource){

        var employeeFactory = {        
        employees: employees,
        empById: empById
    };
    return employeeFactory;

    ////////////

    function employees() {
        return $resource('http://localhost:3000/employees');
    };

    function empById() {
       return $resource('http://localhost:3000/employees/:id', {id:'@id'},
    {
        'update': { method:'PUT' },
        'delete' : { method: 'DELETE'}
    });

    }  
    }

})();

