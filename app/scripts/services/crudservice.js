'use strict';

angular.module('dataAppApp.crudservice',[])
  .factory('crudService', function crudService() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
    createNode: function (){},
  	readNode: function (){},
  	updateNode: function (){},
  	deleteNode: function (){}
    };
  });
