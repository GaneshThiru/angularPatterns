(function ()
{
    'use strict';    
    angular
        .module('empApp', [
            /*
             * Inject your dependencies here
             * |
             * Core dependencies
             * |
             * |
             * Application dependencies
             * |
             */

            /**For UI-routing module*/
            'ui.router',

            /**Custom modules */
            'admin',
            'employee'


        ])
})();