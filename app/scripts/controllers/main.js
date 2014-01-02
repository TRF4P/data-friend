'use strict';

angular.module('dataAppApp')
  .controller('MainCtrl', function ($scope, $http, dataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    /** dataService.loadConfig('/scripts/model/model.json')
    .then(
      function (data) {
        $scope.nodes = data.rootNodeModel;
        $scope.rels = data.rootRelationshipModel;
        //$scope.sample = $scope.samples[0];
      },
      function (error) {
        $scope.error = error;
      }
    ); **/
    
  });
