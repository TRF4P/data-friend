'use strict';

angular.module('dataAppApp')
  .controller('MainCtrl', function ($scope, $http, dataService, crudService) {
    dataService.loadConfig('/scripts/model/model.json')
    .then(
      function (data) {
        $scope.nodes = data.rootNodeModel;
        $scope.rels = data.rootRelationshipModel;
        //$scope.sample = $scope.samples[0];
      },
      function (error) {
        $scope.error = error;
      }
    );
    /** CRUD Functions  **/

    function ModelRoot() {
    this.nodes = {};
    this.rels = {};
    //this.getModel = function(){};
    };

    function NodeType() {
      this.nodeTypeLabel = "",
      this.properties = {},
      this.relationships = {}
     };

    function PropertyType() {
      this.label="",
      this.dataType="",
      this.required="yes"
    };

    function RelationshipType() {
      this.relLabel="",
      this.properties=[]

    };



    /** nodeType Functions  **/

        /** create nodeType Functions  **/

    $scope.createNodeType = function (modelVar) {
      };

              /** create nodeType Functions  **/

    $scope.readNodeType = function (modelRoot, nodeKey) {
        console.log("fml");
        return modelRoot.nodes[nodeKey];
      };

        $scope.changeSelectedNode = function () {
        console.log($scope.selectedNose);
        $scope.selectedNode = $scope.readNodeType($scope.rootModel,$scope.selectedNose);
         $scope.selectedProperties = $scope.readProperties($scope.selectedNode.properties);
       // return modelRoot.nodes[nodeKey];
      };



        /** submit nodeType Functions  **/

    $scope.SubmitNodeType = function (rootModel,nodeType) {
      rootModel.nodes[nodeType.nodeTypeLabel]=nodeType;
      };

        /** update nodeType Functions  **/


    /** property Functions  **/

    /** create property Functions  **/

  $scope.createProperty = function() {
   // $scope.selectedNode.properties
   // $selectedNode.properties[];
   console.log($scope.selectedProperties);
  var newProp = new PropertyType();
    $scope.selectedProperties.push(newProp);

   // modelVar.nodes[nodeVar] = new PropertyType();

  };

     /** read property Functions  **/

     $scope.readProperties = function(props){
      var arr = Object.keys(props).map(function (key) {
        return props[key];
      });
      console.log(arr);
      return arr;
     };
    /** submit property Functions  **/

$scope.submitProperty = function(nodeVar,property){
  nodeVar.properties[property.label] = property;
};



    /** update property Functions  **/


    /** relationship Functions  **/


  $scope.url="views/forms/propertyForm.html";
  $scope.changeUrl = function(value){
   return $scope.url
  };
  $scope.removeProperty= function(contact) {
    for (var i = 0, ii = nodeType.properties.length; i < ii; i++) {
      if (contact === nodeType.properties[i]) {
        $scope.nodeType.properties.splice(i, 1);
      }
    }
  };
  
  $scope.dataTypes=["string","number","date","datetime-local","url"];

var rootModel = new ModelRoot();
  $scope.rootModel = rootModel;
  var person = new NodeType();
  person.nodeTypeLabel="person";
  var firstName = new PropertyType();
  firstName.label="firstName";
   var lastName = new PropertyType();
   lastName.label="lastName";
  $scope.submitProperty(person,firstName);
  $scope.submitProperty(person,lastName);
  $scope.rootModel.nodes["person"] = person;

   var place = new NodeType();
place.nodeTypeLabel="place";
  var location = new PropertyType();
location.label="location";
   var cats = new PropertyType();
   cats.label="cats";
  $scope.submitProperty(person,firstName);
  $scope.submitProperty(person,lastName);
  $scope.rootModel.nodes["place"] = place;


  console.log($scope.rootModel.nodes);
  $scope.selectedNode = $scope.readNodeType($scope.rootModel,'person');
  $scope.selectedProperties = $scope.readProperties($scope.selectedNode.properties);

  });
