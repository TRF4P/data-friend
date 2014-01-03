'use strict';

angular.module('dataAppApp.directives',[])
  .directive('myCustomer', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
})
    .directive('propertyForm', function() {
    return {
      templateUrl: 'views/forms/propertyForm.html'
    };
})
    .directive('editorSelect', function() {
    	var bob = "awesome";

    	  function link(scope, element, attrs) {
      	var format,
          timeoutId;
          scope.url='views/forms/propertyForm.html';
          console.log(scope);
          element.text();
          

      }
    return {
     	template: "<div ng-include='changeUrl()'>hi</div>"
     	
    };
})
  ;
