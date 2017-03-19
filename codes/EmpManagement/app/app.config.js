(function ()
{
    'use strict';

    angular
        .module('empApp')
        .config(appConfig);

    function appConfig($stateProvider, $urlRouterProvider){
        
        //Setting default url route

        $urlRouterProvider.otherwise('/main');
       
        $stateProvider  	
        //Common Template Page for all modules
    	.state('main', {
          url: "/main",
              
          views    : {
              'root@'                      : {
                  templateUrl: 'templates/main.html',
                  controller : 'appController as ap'
              }
          }
        })       


    }

})();