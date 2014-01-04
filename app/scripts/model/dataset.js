'use strict';
function ModelRoot() {

  this.nodes = {};
  this.rels = {};

  this.loadModel = function(params) {
    //rest code goes here
  };


  /** ===========================
    *
    *      Object Model
    *
    =============================== **/

  this.dataTypes = ['string', 'number', 'date', 'datetime-local', 'url'];

  this.nodeType = function() {
    return {
      nodeTypeLabel: '',
      properties: {},
      relationships: {}
    };
  };

  this.propertyType = function() {
    return {
      label: '',
      dataType: '',
      required: 'yes'
    };
  };

  this.relationshipType = function() {
    return {
      relLabel: '',
      properties: []
    };
  };
  /** ===========================
    *
    *      Create Operations
    *
    =============================== **/

  this.createNodeType = function(node) {
    var validation = this.validateNodeType(node);
    if (validation.response === true) {
      this.nodes[node.nodeTypeLabel] = node;
      console.log('created!');
      console.log(validation.response);
    } else {
      console.log('Error :(');
      console.log(validation.response);
    }

  };

  this.createRelationshipType = function(rel) {
    var validation = this.validateRel(rel);
    if (validation.response === true) {
      this.rels[rel.relTypeLabel] = rel;
      console.log('created!');
      console.log(validation.response);
    } else {
      console.log('Error :(');
      console.log(validation.response);
    }
    //warn on overwrite
  };

  this.setNodePropertyType = function(node, property) {
    var validation = this.validateProperty(property);
    if (validation.response === true) {
      this.nodes[node.nodeTypeLabel].properties[property.label] = property;
      console.log('created!');
      console.log(validation.response);
    } else {
      console.log('Error :(');
      console.log(validation.response);
    }
    //warn on overrite

  };

  this.setRelPropertyType = function(rel, property) {
    var validation = this.validateProperty(property);
    if (validation.response === true) {
      this.rels[rel.relTypeLabel].properties[property.label] = property;
      console.log('created!');
      console.log(validation.response);
    } else {
      console.log('Error :(');
      console.log(validation.response);
    }
    //warn on overrite

  };

  /** ===========================
    *
    *      Meta-Read Operations
    *
    =============================== **/


  this.getNodeTypeKeys = function() {
    return Object.keys(this.nodes);
  };

  this.getRelTypeKeys = function() {
    return Object.keys(this.rels);
  };


  /** ===========================
    *
    *      Read Operations
    *
    =============================== **/


  this.getNodeType = function(nodeKey) {
    return this.nodes[nodeKey];
  };

  this.getNodeTypes = function() {
    return this.nodes;
  };

  this.getNodeProperties = function(node) {

  };

  this.getNodeRels = function(node) {

  };

  this.getRelationshipType = function(nodeKey) {
    return this.nodes[nodeKey];
  };

  this.getRelationshipsTypes = function() {
    return this.nodes;
  };


  this.getRelProperties = function(node) {

  };


  /** ===========================
    *
    *      Delete Operations
    *
    =============================== **/
  this.deleteNodeType = function(node) {
    //validate
    //warn on overwrite
    delete this.node[node.nodeTypeLabel];

  };

  this.deleteRelationshipType = function(rel) {

    //validate
    //warn on overwrite
    delete this.rels[rel.relTypeLabel];
  };

  this.removeNodePropertyType = function(node, property) {
    //validate
    //warn on overrite
    delete this.nodes[node.nodeTypeLabel].properties[property.label];

  };

  this.removeRelPropertyType = function(rel, property) {
    //validate
    //warn on overrite
    delete this.rels[rel.relTypeLabel].properties[property.label];
  };

  /** ===========================
    *
    *      Validation Operations
    *
    =============================== **/

  this.validateNodeType = function(node) {
    var response = true;
    return {
      response: response
    };
  };
  this.validateRel = function(rel) {
    var response = true;
    return {
      response: response
    };
  };
  this.validateProperty = function(input) {
    var response = true;
    return {
      response: response
    };
  };
  this.validateDataType = function(input) {
    var response = true;
    return {
      response: response
    };
  };
  this.validateLabel = function(input) {
    var response = true;
    return {
      response: response
    };
  };
  /** ===========================
    *
    *     Test Genration Operations
    *
    =============================== **/

    this.dummyNodeCommit = function(){
      var dumNode = this.dummyNodeType();
      this.createNodeType(dumNode);
      this.setNodePropertyType(dumNode,this.dummyProperty());
    };


    this.dummyNodeType = function(){
      var dummy = this.nodeType();
      dummy.nodeTypeLabel=chance.word({length:10});
      return dummy;

    };
    this.dummyProperty = function(){
      var prop = this.propertyType();
      prop.label = chance.string();
      prop.dataType =  chance.pick(this.dataTypes);
      prop.required = chance.bool();
      return prop;
    };

}
