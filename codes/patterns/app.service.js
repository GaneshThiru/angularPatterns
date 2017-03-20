(function ()
{
    'use strict';

    angular
        .module('sample')
        .service('sampleService', sampleService);

    function sampleService(){
		  var data = '';
	
		  this.setData = function(d){
            data = d;
            
        }
        this.getData = function(){
            return data;
        }
		
    }

})();

