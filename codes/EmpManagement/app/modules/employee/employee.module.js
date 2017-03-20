(function ()
{
    'use strict';    
    angular
        .module('employee', [
            /*
             * Inject your dependencies here
             * |
             * Core dependencies
             * |
             * |
             * Application dependencies
             * |
             */
            'employee.create',
            'employee.read',
            'employee.update',
            'employee.delete'
        ])
})();