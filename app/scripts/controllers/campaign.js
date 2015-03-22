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
    $scope.showValidation = false;
    
    $scope.myCrowdfund = fbutil.syncObject('campaigns/' + user.uid);
    $scope.signatures = fbutil.syncArray('signatures/' + user.uid);
    $scope.cfRegex = /https?:\/\/www\.crowdfunder\.co\.uk\/([^\/?]+)(?=\/?(?:$|\?))/;

    $scope.addCrowdfunder = function (cfForm, url) {
      if (cfForm.$valid) {
        $scope.showValidation = false;
        var campaignRecord = {};
        var matches = $scope.cfRegex.exec(url);
        var slug = matches[1];

        campaignRecord[user.name] = { 
          raised: 0,
          src: slug
        };
        fbutil.ref('campaigns').update(campaignRecord);
      } else {
        $scope.showValidation = true;
      }
    };

    $scope.removeCrowdfunder = function() {
      fbutil.ref('campaigns/' + user.name).remove();
    };

    $scope.finish = function() {
      $location.path('/congratulations');
    };
  });
