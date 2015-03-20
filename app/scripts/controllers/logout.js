'use strict';
/**
 * @ngdoc function
 * @name electionhackApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('electionhackApp')
  .controller('LogoutCtrl', function ($scope, simpleLogin, $location) {

    simpleLogin.logout();
    $location.path('/');

});