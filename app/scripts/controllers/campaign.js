'use strict';

/**
 * @ngdoc function
 * @name electionhackApp.controller:CampaignCtrl
 * @description
 * # CampaignCtrl
 * Controller of the electionhackApp
 */
angular.module('electionhackApp')
  .controller('CampaignCtrl', function ($scope, $firebaseArray, $sce) {
    var ref = new Firebase("https://electionhack.firebaseio.com/campaigns");
    // download the data into a local object
    $scope.campaigns = $firebaseArray(ref);
    $scope.addCrowdfunder = function() {
      $scope.campaigns.$add({
        src: $scope.newCrowdfunder
      });
    };
  });
