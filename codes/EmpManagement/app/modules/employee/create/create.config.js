(function ()
{
    'use strict';

    angular
        .module('create')
        .config(createConfig);

    function createConfig($stateProvider, $urlRouterProvider){        
        
        $stateProvider  	
        //Common Template Page for all modules
    	.state('main.employee.create', {
          url: "/create.do",         
          views    : {
              'empModule@main.employee'                      : {
                  templateUrl: 'modules/employee/create/create.html',
                  controller : 'createController as ad'
              }
          }
        })       


    }


})();

