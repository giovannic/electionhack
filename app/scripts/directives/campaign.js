'use strict';

/**
 * @ngdoc directive
 * @name electionhackApp.directive:campaign
 * @description
 * # campaign
 */
angular.module('electionhackApp')
  .directive('campaign', function ($http) {
    return {
      restrict: 'E',
      scope: {
        src: '=src'
      },
      link: function postLink(scope, element, attrs) {
        var s = document.createElement("script");
        s.type = "text/javascript";                
        var src = element.attr('src');
        src = "http://www.crowdfunder.co.uk/" + src +
        "/widget.js/";
        s.src = src;
        document.head.appendChild(s);
        element.remove();
      }
    };
  });
