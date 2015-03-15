'use strict';

/**
 * @ngdoc function
 * @name electionhackApp.controller:CampaignCtrl
 * @description
 * # CampaignCtrl
 * Controller of the electionhackApp
 */
angular.module('electionhackApp')
  .controller('CampaignCtrl', function ($scope, fbutil, $sce) {
    // download the data into a local object
    $scope.campaigns = fbutil.syncArray('/campaigns');
    $scope.addCrowdfunder = function() {
      $scope.campaigns.$add({
        src: $scope.newCrowdfunder
      });
    };
  });
