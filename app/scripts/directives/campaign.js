'use strict';

/**
 * @ngdoc directive
 * @name electionhackApp.directive:campaign
 * @description
 * # campaign
 */
angular.module('electionhackApp')
  .directive('campaign', function ($http, angularLoad) {
    return {
      restrict: 'E',
      scope: {
        src: '@'
      },
      link: function postLink(scope, element) {
        var src = scope.src;
        src = 'http://www.crowdfunder.co.uk/' + src +
        '/widget.js/';
        angularLoad.loadScript(src).then(function() {
          element.html(html);// jshint ignore:line
        })
        .catch(function() {
          element.html('invalid campaign');
        }); /* only one campaign can appear on a page at any time */
      }
    };
  });
