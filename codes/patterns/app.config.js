(function ()
{
    'use strict';

    angular
        .module('sample')
        .config(sampleConfig);

    function sampleConfig(){

        //Default config for routing
        //Add module ui.router inside app
        //Inject $stateProvider, $urlRouterProvider

     /*   $stateProvider  	        
    	.state('stateName', {
          url: "/url",         
          views    : {
              'uiViewName@parentState' : {
                  templateUrl: '*.html',
                  controller : '*Controller as aliasName'
              }
          }
       }) */


    }

})();

