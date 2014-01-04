'use strict';

angular.module('dataAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'dataAppApp.services',
  'dataAppApp.crudservice',
  'dataAppApp.directives',
  'dataAppApp.datamodel',
  'ui.select2'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dataModel', {
        templateUrl: 'views/dataModel.html',
        controller: 'MainCtrl'
      })
      .when('/testview', {
        templateUrl: 'views/testview.html',
        controller: 'MainCtrl'
      })
      .when('/manipulator', {
        templateUrl: 'views/manipulator.html',
        controller: 'MainCtrl'
      })
      .when('/dataBuilder', {
        templateUrl: 'views/dataBuilder.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
