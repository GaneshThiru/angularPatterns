(function ()
{
    'use strict';

    angular
        .module('admin')
        .config(adminConfig);

    function adminConfig($stateProvider, $urlRouterProvider){        
        
        $stateProvider  	
        //Common Template Page for all modules
    	.state('main.admin', {
          url: "/admin.do",         
          views    : {
              'module@main'                      : {
                  templateUrl: 'modules/admin/admin.html',
                  controller : 'adminController as ad'
              }
          }
        })       


    }


})();

