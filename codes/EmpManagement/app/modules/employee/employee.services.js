(function ()
{
    'use strict';

    angular
        .module('employee')
        .service('empService', employeeService);

    function employeeService($rootScope){
        var data = '';
        $rootScope.recent = [];
        this.setData = function(d){
            data = d;
            $rootScope.recent.push(data);
        }
        this.getData = function(){
            return data;
        }
  
    }

})();

