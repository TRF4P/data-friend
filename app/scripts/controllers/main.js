'use strict';

angular.module('dataAppApp')
  .controller('MainCtrl', function ($scope, $http, dataService, crudService, dataModel) {
    
/*=============================================
=            Scope Variables                  =
=============================================*/
    $scope.testModel = dataModel;
    $scope.url='views/main.html';
    $scope.nodeInstance = $scope.testModel.nodeType();
/*-----  Scope Variables              ------*/




/*=============================================
=            Scope Functions                  =
=============================================*/
    $scope.changeUrl = function(){
        return $scope.url;
        };

    $scope.changeSelectedNode = function () {
        var bar = $scope.selectedNose;
        $scope.selectedNode = $scope.testModel.getNodeType(bar);
        $scope.selectedProperties = $scope.testModel.nodes[$scope.selectedNose].properties;
        };

    $scope.createProperty = function() {
      var newProp = $scope.testModel.propertyType();
      $scope.selectedProperties[chance.hash()] = newProp;
      };

    $scope.submitNode = function(){
      console.log($scope.nodeInstance);
      $scope.testModel.createNodeType($scope.nodeInstance);
      $scope.selectedNose = $scope.nodeInstance.nodeTypeLabel;
      $scope.nodeInstance = $scope.testModel.nodeType();
      $scope.changeSelectedNode();
      $scope.url='views/forms/propertyForm.html';
      };
/*-----         Scope Functions       ------*/




/*=============================================
=            Section comment block            =
=============================================*/
    dataModel.dummyNodeCommit();
    dataModel.dummyNodeCommit();
    dataModel.dummyNodeCommit();
    dataModel.dummyNodeCommit();
/*-----  End of Section comment block  ------*/


  
  });
