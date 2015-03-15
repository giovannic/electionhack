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
    $scope.myCrowdfund = fbutil.syncObject('campaigns/' + user.uid);
    $scope.signatures = fbutil.syncArray('signatures/' + user.uid);

    $scope.addCrowdfunder = function() {
      var campaignRecord = {};

      var slug = $scope.newCrowdfunder.split('/').filter(function(part) {
        return part !== '?';
      }).pop(); /* HACK */

      campaignRecord[user.uid] = { 
        raised: 0,
        src: slug
      };
      fbutil.ref('campaigns').update(campaignRecord);
    };

    $scope.removeCrowdfunder = function() {
      fbutil.ref('campaigns/' + user.uid).remove();
    };

    $scope.finish = function() {
      $location.path('/congratulations');
    };
  });
