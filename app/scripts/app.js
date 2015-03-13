'use strict';

/**
 * @ngdoc overview
 * @name electionhackApp
 * @description
 * # electionhackApp
 *
 * Main module of the application.
 */
angular
  .module('electionhackApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/run', {
        templateUrl: 'views/profileform.html',
        controller: 'ProfileFormCtrl'
      })
      .when('/campaign', {
        templateUrl: 'views/campaign.html',
        controller: 'CampaignCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
