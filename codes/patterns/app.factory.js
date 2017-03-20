(function ()
{
    'use strict';

    angular
        .module('sample')
        .factory('sampleFactory', sampleFactory);

    function sampleFactory(){
		var sampleFactory = 
		{        
        getData: getData        
        };
    return sampleFactory;

    ////////////

    function getData() {
        return '100';
    };
    }

})();

