(function ()
{
    'use strict';

    angular
        .module('delete')
        .config(deleteConfig);

    function deleteConfig($stateProvider, $urlRouterProvider){        
        $stateProvider  	
        //Common Template Page for all modules
    	.state('main.employee.delete', {
          url: "/delete.do",         
          views    : {
              'empModule@main.employee'                      : {
                  templateUrl: 'modules/employee/delete/delete.html',
                  controller : 'deleteController as de'
              }
          }
        })       


    }


})();

