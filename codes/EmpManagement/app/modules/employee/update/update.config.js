(function ()
{
    'use strict';

    angular
        .module('employee.update')
        .config(updateConfig);

    function updateConfig($stateProvider, $urlRouterProvider){        
        
        $stateProvider  	
        //Common Template Page for all modules
    	.state('main.employee.update', {
          url: "/update.do",         
          views    : {
              'empModule@main.employee'                      : {
                  templateUrl: 'modules/employee/update/update.html',
                  controller : 'updateController as up'
              }
          }
        })       


    }


})();

