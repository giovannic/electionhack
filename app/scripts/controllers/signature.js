'use strict';

/**
 * @ngdoc function
 * @name electionhackApp.controller:SignatureCtrl
 * @description
 * # SignatureCtrl
 * Controller of the electionhackApp
 */
angular.module('electionhackApp')
  .controller('SignatureCtrl', function ($scope, $routeParams, fbutil) {
    $scope.userId = $routeParams.candidate;
    $scope.crowdfund = fbutil.syncObject('campaigns/' + $scope.userId);
    $scope.form = fbutil.syncObject('forms/' + $scope.userId);
    var canvas = document.querySelector('canvas');// jshint ignore:line
    var signaturePad = new SignaturePad(canvas);// jshint ignore:line
  });
