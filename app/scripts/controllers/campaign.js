'use strict';

/**
 * @ngdoc function
 * @name electionhackApp.controller:CampaignCtrl
 * @description
 * # CampaignCtrl
 * Controller of the electionhackApp
 */
angular.module('electionhackApp')
  .controller('CampaignCtrl', function ($scope, user, fbutil, $location) {
    // download the data into a local object
    $scope.campaigns = fbutil.syncArray('campaigns');

    $scope.myCrowdfund = fbutil.syncObject('campaigns/' + user.uid);

    $scope.addCrowdfunder = function() {
      var campaignRecord = {};
      campaignRecord[user.uid] = { 
        raised: 0,
        src: $scope.newCrowdfunder
      };
      fbutil.ref('campaigns').update(campaignRecord);
    };

    $scope.skip = function() {
      $location.path('/sign');
    };
  });
