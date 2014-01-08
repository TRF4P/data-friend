'use strict';

angular.module('dataAppApp')
  .controller('MainCtrl', function ($scope, $http, dataService, crudService, dataModel) {
    
    $scope.testModel = dataModel;
    $scope.url='views/main.html';


    $scope.changeUrl = function(){
      return $scope.url;
    };

   $scope.nodeInstance = $scope.testModel.nodeType();
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

      /** ===========================
      *
      *      Test Operations
      *
      =============================== **/
  
    dataModel.dummyNodeCommit();
    dataModel.dummyNodeCommit();
    dataModel.dummyNodeCommit();
    dataModel.dummyNodeCommit();
  });
