(function ()
{
    'use strict';

    angular
        .module('employee')
        .config(employeeConfig);

    function employeeConfig($stateProvider, $urlRouterProvider){        
       
        $stateProvider  	
        //Common Template Page for all modules
    	.state('main.employee', {
          url: "/employee",         
          views    : {
              'module@main'                      : {
                  templateUrl: 'modules/employee/employee.html',
                  controller : 'employeeController as emp'
              }
          }
        })       


    }

})();

