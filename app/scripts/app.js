'use strict';

angular.module('dataAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'dataAppApp.services'
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
      .when('/dataBuilder', {
        templateUrl: 'views/dataBuilder.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
