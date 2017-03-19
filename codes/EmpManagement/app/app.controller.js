(function ()
{
    'use strict';

    angular
        .module('empApp')
        .controller('appController', appController);

    function appController(){
        var ap = this;
        ap.loginType = 'Admin';
        alert('appController')
    }

})();

