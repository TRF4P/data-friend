'use strict';

angular.module('dataAppApp.datamodel', [])
    .service('dataModel', function dataModel() {

        this.nodes = {};
        this.rels = {};

        this.loadModel = function(params) {
            //rest code goes here
        };

        /*=============================================
=         	   Object Models	            =
=============================================*/
        this.dataTypes = ['string', 'number', 'date', 'datetime-local', 'url'];

        this.nodeType = function() {
            return {
                nodeTypeLabel: '',
                properties: {},
                relationships: {},
                committed: false
            };
        };

        this.propertyType = function() {
            return {
                label: '',
                dataType: '',
                required: 'yes',
                committed: false
            };
        };

        this.relationshipType = function() {
            return {
                relLabel: '',
                properties: [],
                committed: false
            };
        };
        /*----- 		 Object Models		  ------*/



        /*==========================================
=            Creation Model Functions            =
==========================================*/
        this.createNodeType = function(node) {
            var validation = this.validateNodeType(node);
            if (validation.response === true) {
                node.committed = true;
                this.nodes[node.nodeTypeLabel] = node;
                //console.log('created!');
                // console.log(validation.response);
            } else {
                // console.log('Error :(');
                // console.log(validation.response);
            }

        };

        this.createRelationshipType = function(rel) {
            var validation = this.validateRel(rel);
            if (validation.response === true) {
                this.rels[rel.relTypeLabel] = rel;
                //  console.log('created!');
                // console.log(validation.response);
            } else {
                // console.log('Error :(');
                // console.log(validation.response);
            }
            //warn on overwrite
        };

        this.setNodePropertyType = function(node, property) {
            var validation = this.validateProperty(property);
            if (validation.response === true) {
                property.committed = true;
                this.nodes[node.nodeTypeLabel].properties[property.label] = property;
                //  console.log('created!');
                //  console.log(validation.response);
            } else {
                //  console.log('Error :(');
                //  console.log(validation.response);
            }
            //warn on overrite

        };

        this.setRelPropertyType = function(rel, property) {
            var validation = this.validateProperty(property);
            if (validation.response === true) {
                this.rels[rel.relTypeLabel].properties[property.label] = property;
                //  console.log('created!');
                //  console.log(validation.response);
            } else {
                //  console.log('Error :(');
                //  console.log(validation.response);
            }
            //warn on overrite

        };
        /*-----  End of Creation Functions  ------*/




        /*============================================
=            Meta Model Read Operations            =
============================================*/

        this.getNodeTypeKeys = function() {
            var keyArray = Object.keys(this.nodes);
            return keyArray;
        };

        this.getRelTypeKeys = function() {
            return Object.keys(this.rels);
        };
        /*-----  End of Meta Read Operations  ------*/




        /*============================================
=             Model Read Operations            =
============================================*/
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
        /*-----  End of Data Read Operations  ------*/


        /*==============================================
=          		 Model Delete Operations            =
===============================================*/


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
        /*-----  End of Section comment block  ------*/


        /*=============================================
=            Model Validation Operations            =
=============================================*/

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
        /*-----  End of Validation Operations  ------*/



        /*===================================================
=            Text Generation For Testing            =
===================================================*/


        this.dummyNodeCommit = function() {
            var dumNode = this.dummyNodeType();
            this.createNodeType(dumNode);
            this.setNodePropertyType(dumNode, this.dummyProperty());
            this.setNodePropertyType(dumNode, this.dummyProperty());
            this.setNodePropertyType(dumNode, this.dummyProperty());
            this.setNodePropertyType(dumNode, this.dummyProperty());
            this.setNodePropertyType(dumNode, this.dummyProperty());
        };


        this.dummyNodeType = function() {
            var dummy = this.nodeType();
            dummy.nodeTypeLabel = chance.word({
                length: 10
            });
            return dummy;
        };

        this.dummyProperty = function() {
            var prop = this.propertyType();
            prop.label = chance.word({
                length: 10
            });
            prop.dataType = chance.pick(this.dataTypes);
            prop.required = chance.bool();
            return prop;
        };
        /*-----  End of Text Generation For Testing  ------*/

        /**
         *
         * ***************** FML THIS IS THE DATA PART ***********************
         *
         **/





        /*=============================================
=            Data Create Functions            =
=============================================*/

        this.createNode = function() {};
        this.createRelationship = function() {};

        /*-----  End of Data Create Functions  ------*/


        /*===========================================
=            Data Read Functions            =
===========================================*/

        this.readNode = function() {};
        this.readRelationship = function() {};



        /*-----  End of Data Read Functions  ------*/



        /*=============================================
=            Data Update Functions            =
=============================================*/



        /*-----  End of Data Update Functions  ------*/

        /*=============================================
=            Data Delete Functions            =
=============================================*/



        /*-----  End of Data Delete Functions  ------*/

        /*===================================================
=            Data Manipulation Functions            =
===================================================*/

        this.consolidateProperties = function() {};
        this.moveRelationships = function() {};
        this.e


        /*-----  End of Data Manipulation Functions  ------*/









    });