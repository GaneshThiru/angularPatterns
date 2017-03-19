(function ()
{
    'use strict';

    angular
        .module('read')
        .config(readConfig);

    function readConfig($stateProvider, $urlRouterProvider){        
        $stateProvider  	
        //Common Template Page for all modules
    	.state('main.employee.read', {
          url: "/read.do",         
          views    : {
              'empModule@main.employee'                      : {
                  templateUrl: 'modules/employee/read/read.html',
                  controller : 'readController as de'
              }
          }
        })       


    }


})();

